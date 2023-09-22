#[system]
mod CreateRoad {
    
    use eternum::components::position::{Coord};
    use eternum::components::resources::Resource;
    use eternum::components::road::{Road, RoadImpl};
    use eternum::components::owner::Owner;
    use eternum::components::config::RoadConfig;

    use eternum::constants::ROAD_CONFIG_ID;
    
    use dojo::world::Context;

    use core::traits::Into;


    fn execute(ctx: Context, entity_id: u128, start_coord: Coord, end_coord: Coord, usage_count: usize) {

        // assert that entity is owned by caller
        let entity_owner = get!(ctx.world, entity_id, Owner);
        assert(entity_owner.address == ctx.origin, 'entity id not owned by caller');

        let road = RoadImpl::get(ctx.world, start_coord, end_coord);
        assert(road.usage_count == 0, 'road already exists');

        let road_config = get!(ctx.world, ROAD_CONFIG_ID, RoadConfig);
        let fee: u128 = road_config.fee_amount * usage_count.into();

        // ensure fee payment
        let entity_fee_resource = get!(ctx.world, (entity_id, road_config.fee_resource_type), Resource);
        assert(entity_fee_resource.balance >= fee, 'insufficient stone balance');
        
        set!(ctx.world, (
            Road {
                start_coord_x: start_coord.x,
                start_coord_y: start_coord.y,
                end_coord_x: end_coord.x,
                end_coord_y: end_coord.y,
                usage_count
            },
            Resource {
                entity_id: entity_fee_resource.entity_id,
                resource_type: entity_fee_resource.resource_type,
                balance: entity_fee_resource.balance -  fee
            }
        ));
    }
}



#[cfg(test)]
mod tests {
    use eternum::components::position::{Coord };
    use eternum::components::resources::Resource;
    use eternum::components::road::{Road, RoadImpl};
    use eternum::components::owner::Owner;
    use eternum::components::config::RoadConfig;

    use eternum::constants::{ROAD_CONFIG_ID, ResourceTypes};
    
    use eternum::utils::testing::spawn_eternum;
    
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

    use starknet::contract_address_const;

    use core::array::ArrayTrait;
    use core::serde::Serde;

    #[test]
    #[available_gas(3000000000000)]  
    fn test_create() {
        let world = spawn_eternum();

        let entity_id: u128 = 44;

        starknet::testing::set_contract_address(world.executor());
        set!(world, ( 
            Owner { entity_id: entity_id, address: contract_address_const::<'entity'>()},
            Resource {
                entity_id: entity_id,
                resource_type: ResourceTypes::STONE,
                balance: 400
            },
            RoadConfig {
                config_id: ROAD_CONFIG_ID,
                fee_resource_type: ResourceTypes::STONE,
                fee_amount: 10,
                speed_up_by: 2
            }
        ));

        let start_coord = Coord { x: 20, y: 30};
        let end_coord = Coord { x: 40, y: 50};

        starknet::testing::set_contract_address(contract_address_const::<'entity'>());

        let mut calldata = array![];
        Serde::serialize(@entity_id, ref calldata);
        Serde::serialize(@end_coord, ref calldata); // end first because order should not matter
        Serde::serialize(@start_coord, ref calldata);
        Serde::serialize(@33, ref calldata);
        world.execute('CreateRoad', calldata);

        let road = RoadImpl::get(world, start_coord, end_coord);
        assert(road.usage_count == 33, 'usage count should be 33');

        let entity_fee_resource = get!(world, (entity_id, ResourceTypes::STONE), Resource);
        assert(entity_fee_resource.balance == 400 - (33 * 10), 'stone balance should be 70');
    }



    #[test]
    #[available_gas(3000000000000)]  
    #[should_panic(expected: ('entity id not owned by caller','ENTRYPOINT_FAILED','ENTRYPOINT_FAILED','ENTRYPOINT_FAILED' ))]
    fn test_not_entity() {
        let world = spawn_eternum();

        starknet::testing::set_contract_address(world.executor());
        let entity_id: u128 = 44;
        let start_coord = Coord { x: 20, y: 30};
        let end_coord = Coord { x: 40, y: 50};
        set!(world, ( 
            Owner { entity_id: entity_id, address: contract_address_const::<'entity'>()},
            Road {
                start_coord_x: start_coord.x,
                start_coord_y: start_coord.y,
                end_coord_x: end_coord.x,
                end_coord_y: end_coord.y,
                usage_count: 44
            })
        );

        // call as unknown address
        starknet::testing::set_contract_address(
            contract_address_const::<'some_unknown'>()
        );

        let mut calldata = array![];
        Serde::serialize(@entity_id, ref calldata);
        Serde::serialize(@end_coord, ref calldata); // end first because order should not matter
        Serde::serialize(@start_coord, ref calldata);
        Serde::serialize(@1, ref calldata);
        world.execute('CreateRoad', calldata);
    
    }




    #[test]
    #[available_gas(3000000000000)]  
    #[should_panic(expected: ('insufficient stone balance','ENTRYPOINT_FAILED','ENTRYPOINT_FAILED','ENTRYPOINT_FAILED' ))]
    fn test_insufficient_balance() {
        let world = spawn_eternum();

        let entity_id: u128 = 44;

        starknet::testing::set_contract_address(world.executor());
        set!(world, ( 
            Owner { entity_id: entity_id, address: contract_address_const::<'entity'>()},
            Resource {
                entity_id: entity_id,
                resource_type: ResourceTypes::STONE,
                balance: 400
            },
            RoadConfig {
                config_id: ROAD_CONFIG_ID,
                fee_resource_type: ResourceTypes::STONE,
                fee_amount: 10,
                speed_up_by: 2
            }
        ));

        let start_coord = Coord { x: 20, y: 30};
        let end_coord = Coord { x: 40, y: 50};

        starknet::testing::set_contract_address(contract_address_const::<'entity'>());

        let mut calldata = array![];
        Serde::serialize(@entity_id, ref calldata);
        Serde::serialize(@end_coord, ref calldata); 
        Serde::serialize(@start_coord, ref calldata);
        Serde::serialize(@50, ref calldata); // 50 * 10 > 400
        world.execute('CreateRoad', calldata);
    }





    #[test]
    #[available_gas(3000000000000)]  
    #[should_panic(expected: ('road already exists','ENTRYPOINT_FAILED','ENTRYPOINT_FAILED','ENTRYPOINT_FAILED' ))]
    fn test_already_exists() {
        let world = spawn_eternum();

        starknet::testing::set_contract_address(world.executor());
        let entity_id: u128 = 44;
        let start_coord = Coord { x: 20, y: 30};
        let end_coord = Coord { x: 40, y: 50};
        set!(world, ( 
            Owner { entity_id: entity_id, address: contract_address_const::<'entity'>()},
            Road {
                start_coord_x: start_coord.x,
                start_coord_y: start_coord.y,
                end_coord_x: end_coord.x,
                end_coord_y: end_coord.y,
                usage_count: 44
            })
        );

        starknet::testing::set_contract_address(contract_address_const::<'entity'>());

        let mut calldata = array![];
        Serde::serialize(@entity_id, ref calldata);
        Serde::serialize(@end_coord, ref calldata); // end first because order should not matter
        Serde::serialize(@start_coord, ref calldata);
        Serde::serialize(@1, ref calldata);
        world.execute('CreateRoad', calldata);
    
    }
}