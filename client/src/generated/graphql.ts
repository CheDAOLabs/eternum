import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  bool: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u16: { input: any; output: any; }
  u32: { input: any; output: any; }
  u64: { input: any; output: any; }
  u128: { input: any; output: any; }
  u256: { input: any; output: any; }
};

export type Age = {
  __typename?: 'Age';
  born_at?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
};

export type AgeConnection = {
  __typename?: 'AgeConnection';
  edges?: Maybe<Array<Maybe<AgeEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type AgeEdge = {
  __typename?: 'AgeEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Age>;
};

export type AgeOrder = {
  direction: OrderDirection;
  field: AgeOrderField;
};

export enum AgeOrderField {
  BornAt = 'BORN_AT',
  EntityId = 'ENTITY_ID'
}

export type AgeWhereInput = {
  born_at?: InputMaybe<Scalars['u64']['input']>;
  born_atEQ?: InputMaybe<Scalars['u64']['input']>;
  born_atGT?: InputMaybe<Scalars['u64']['input']>;
  born_atGTE?: InputMaybe<Scalars['u64']['input']>;
  born_atLT?: InputMaybe<Scalars['u64']['input']>;
  born_atLTE?: InputMaybe<Scalars['u64']['input']>;
  born_atNEQ?: InputMaybe<Scalars['u64']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type ArrivalTime = {
  __typename?: 'ArrivalTime';
  arrives_at?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
};

export type ArrivalTimeConnection = {
  __typename?: 'ArrivalTimeConnection';
  edges?: Maybe<Array<Maybe<ArrivalTimeEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ArrivalTimeEdge = {
  __typename?: 'ArrivalTimeEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<ArrivalTime>;
};

export type ArrivalTimeOrder = {
  direction: OrderDirection;
  field: ArrivalTimeOrderField;
};

export enum ArrivalTimeOrderField {
  ArrivesAt = 'ARRIVES_AT',
  EntityId = 'ENTITY_ID'
}

export type ArrivalTimeWhereInput = {
  arrives_at?: InputMaybe<Scalars['u64']['input']>;
  arrives_atEQ?: InputMaybe<Scalars['u64']['input']>;
  arrives_atGT?: InputMaybe<Scalars['u64']['input']>;
  arrives_atGTE?: InputMaybe<Scalars['u64']['input']>;
  arrives_atLT?: InputMaybe<Scalars['u64']['input']>;
  arrives_atLTE?: InputMaybe<Scalars['u64']['input']>;
  arrives_atNEQ?: InputMaybe<Scalars['u64']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type BuildingConfig = {
  __typename?: 'BuildingConfig';
  base_sqm?: Maybe<Scalars['u128']['output']>;
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  workhut_cost?: Maybe<Scalars['u128']['output']>;
};

export type BuildingConfigConnection = {
  __typename?: 'BuildingConfigConnection';
  edges?: Maybe<Array<Maybe<BuildingConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type BuildingConfigEdge = {
  __typename?: 'BuildingConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<BuildingConfig>;
};

export type BuildingConfigOrder = {
  direction: OrderDirection;
  field: BuildingConfigOrderField;
};

export enum BuildingConfigOrderField {
  BaseSqm = 'BASE_SQM',
  ConfigId = 'CONFIG_ID',
  WorkhutCost = 'WORKHUT_COST'
}

export type BuildingConfigWhereInput = {
  base_sqm?: InputMaybe<Scalars['u128']['input']>;
  base_sqmEQ?: InputMaybe<Scalars['u128']['input']>;
  base_sqmGT?: InputMaybe<Scalars['u128']['input']>;
  base_sqmGTE?: InputMaybe<Scalars['u128']['input']>;
  base_sqmLT?: InputMaybe<Scalars['u128']['input']>;
  base_sqmLTE?: InputMaybe<Scalars['u128']['input']>;
  base_sqmNEQ?: InputMaybe<Scalars['u128']['input']>;
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  workhut_cost?: InputMaybe<Scalars['u128']['input']>;
  workhut_costEQ?: InputMaybe<Scalars['u128']['input']>;
  workhut_costGT?: InputMaybe<Scalars['u128']['input']>;
  workhut_costGTE?: InputMaybe<Scalars['u128']['input']>;
  workhut_costLT?: InputMaybe<Scalars['u128']['input']>;
  workhut_costLTE?: InputMaybe<Scalars['u128']['input']>;
  workhut_costNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type BuildingCost = {
  __typename?: 'BuildingCost';
  building_cost_config_id?: Maybe<Scalars['u128']['output']>;
  config_id?: Maybe<Scalars['u128']['output']>;
  cost?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  resource_type?: Maybe<Scalars['felt252']['output']>;
};

export type BuildingCostConnection = {
  __typename?: 'BuildingCostConnection';
  edges?: Maybe<Array<Maybe<BuildingCostEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type BuildingCostEdge = {
  __typename?: 'BuildingCostEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<BuildingCost>;
};

export type BuildingCostOrder = {
  direction: OrderDirection;
  field: BuildingCostOrderField;
};

export enum BuildingCostOrderField {
  BuildingCostConfigId = 'BUILDING_COST_CONFIG_ID',
  ConfigId = 'CONFIG_ID',
  Cost = 'COST',
  ResourceType = 'RESOURCE_TYPE'
}

export type BuildingCostWhereInput = {
  building_cost_config_id?: InputMaybe<Scalars['u128']['input']>;
  building_cost_config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  building_cost_config_idGT?: InputMaybe<Scalars['u128']['input']>;
  building_cost_config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  building_cost_config_idLT?: InputMaybe<Scalars['u128']['input']>;
  building_cost_config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  building_cost_config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  cost?: InputMaybe<Scalars['u128']['input']>;
  costEQ?: InputMaybe<Scalars['u128']['input']>;
  costGT?: InputMaybe<Scalars['u128']['input']>;
  costGTE?: InputMaybe<Scalars['u128']['input']>;
  costLT?: InputMaybe<Scalars['u128']['input']>;
  costLTE?: InputMaybe<Scalars['u128']['input']>;
  costNEQ?: InputMaybe<Scalars['u128']['input']>;
  resource_type?: InputMaybe<Scalars['felt252']['input']>;
  resource_typeEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_typeGT?: InputMaybe<Scalars['felt252']['input']>;
  resource_typeGTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_typeLT?: InputMaybe<Scalars['felt252']['input']>;
  resource_typeLTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_typeNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type BuildingTypeConfig = {
  __typename?: 'BuildingTypeConfig';
  building_type_config_id?: Maybe<Scalars['u128']['output']>;
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  id?: Maybe<Scalars['felt252']['output']>;
  resource_types_count?: Maybe<Scalars['u8']['output']>;
  resource_types_packed?: Maybe<Scalars['u256']['output']>;
  sqm?: Maybe<Scalars['u128']['output']>;
};

export type BuildingTypeConfigConnection = {
  __typename?: 'BuildingTypeConfigConnection';
  edges?: Maybe<Array<Maybe<BuildingTypeConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type BuildingTypeConfigEdge = {
  __typename?: 'BuildingTypeConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<BuildingTypeConfig>;
};

export type BuildingTypeConfigOrder = {
  direction: OrderDirection;
  field: BuildingTypeConfigOrderField;
};

export enum BuildingTypeConfigOrderField {
  BuildingTypeConfigId = 'BUILDING_TYPE_CONFIG_ID',
  ConfigId = 'CONFIG_ID',
  Id = 'ID',
  ResourceTypesCount = 'RESOURCE_TYPES_COUNT',
  ResourceTypesPacked = 'RESOURCE_TYPES_PACKED',
  Sqm = 'SQM'
}

export type BuildingTypeConfigWhereInput = {
  building_type_config_id?: InputMaybe<Scalars['u128']['input']>;
  building_type_config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  building_type_config_idGT?: InputMaybe<Scalars['u128']['input']>;
  building_type_config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  building_type_config_idLT?: InputMaybe<Scalars['u128']['input']>;
  building_type_config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  building_type_config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  id?: InputMaybe<Scalars['felt252']['input']>;
  idEQ?: InputMaybe<Scalars['felt252']['input']>;
  idGT?: InputMaybe<Scalars['felt252']['input']>;
  idGTE?: InputMaybe<Scalars['felt252']['input']>;
  idLT?: InputMaybe<Scalars['felt252']['input']>;
  idLTE?: InputMaybe<Scalars['felt252']['input']>;
  idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_types_count?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countGT?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countLT?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_packed?: InputMaybe<Scalars['u256']['input']>;
  resource_types_packedEQ?: InputMaybe<Scalars['u256']['input']>;
  resource_types_packedGT?: InputMaybe<Scalars['u256']['input']>;
  resource_types_packedGTE?: InputMaybe<Scalars['u256']['input']>;
  resource_types_packedLT?: InputMaybe<Scalars['u256']['input']>;
  resource_types_packedLTE?: InputMaybe<Scalars['u256']['input']>;
  resource_types_packedNEQ?: InputMaybe<Scalars['u256']['input']>;
  sqm?: InputMaybe<Scalars['u128']['input']>;
  sqmEQ?: InputMaybe<Scalars['u128']['input']>;
  sqmGT?: InputMaybe<Scalars['u128']['input']>;
  sqmGTE?: InputMaybe<Scalars['u128']['input']>;
  sqmLT?: InputMaybe<Scalars['u128']['input']>;
  sqmLTE?: InputMaybe<Scalars['u128']['input']>;
  sqmNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Capacity = {
  __typename?: 'Capacity';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  weight_gram?: Maybe<Scalars['u128']['output']>;
};

export type CapacityConfig = {
  __typename?: 'CapacityConfig';
  carry_capacity_config_id?: Maybe<Scalars['u128']['output']>;
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_type?: Maybe<Scalars['u128']['output']>;
  weight_gram?: Maybe<Scalars['u128']['output']>;
};

export type CapacityConfigConnection = {
  __typename?: 'CapacityConfigConnection';
  edges?: Maybe<Array<Maybe<CapacityConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type CapacityConfigEdge = {
  __typename?: 'CapacityConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<CapacityConfig>;
};

export type CapacityConfigOrder = {
  direction: OrderDirection;
  field: CapacityConfigOrderField;
};

export enum CapacityConfigOrderField {
  CarryCapacityConfigId = 'CARRY_CAPACITY_CONFIG_ID',
  ConfigId = 'CONFIG_ID',
  EntityType = 'ENTITY_TYPE',
  WeightGram = 'WEIGHT_GRAM'
}

export type CapacityConfigWhereInput = {
  carry_capacity_config_id?: InputMaybe<Scalars['u128']['input']>;
  carry_capacity_config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  carry_capacity_config_idGT?: InputMaybe<Scalars['u128']['input']>;
  carry_capacity_config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  carry_capacity_config_idLT?: InputMaybe<Scalars['u128']['input']>;
  carry_capacity_config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  carry_capacity_config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_type?: InputMaybe<Scalars['u128']['input']>;
  entity_typeEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeNEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_gram?: InputMaybe<Scalars['u128']['input']>;
  weight_gramEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_gramGT?: InputMaybe<Scalars['u128']['input']>;
  weight_gramGTE?: InputMaybe<Scalars['u128']['input']>;
  weight_gramLT?: InputMaybe<Scalars['u128']['input']>;
  weight_gramLTE?: InputMaybe<Scalars['u128']['input']>;
  weight_gramNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type CapacityConnection = {
  __typename?: 'CapacityConnection';
  edges?: Maybe<Array<Maybe<CapacityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type CapacityEdge = {
  __typename?: 'CapacityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Capacity>;
};

export type CapacityOrder = {
  direction: OrderDirection;
  field: CapacityOrderField;
};

export enum CapacityOrderField {
  EntityId = 'ENTITY_ID',
  WeightGram = 'WEIGHT_GRAM'
}

export type CapacityWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_gram?: InputMaybe<Scalars['u128']['input']>;
  weight_gramEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_gramGT?: InputMaybe<Scalars['u128']['input']>;
  weight_gramGTE?: InputMaybe<Scalars['u128']['input']>;
  weight_gramLT?: InputMaybe<Scalars['u128']['input']>;
  weight_gramLTE?: InputMaybe<Scalars['u128']['input']>;
  weight_gramNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Caravan = {
  __typename?: 'Caravan';
  caravan_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['felt252']['output']>;
};

export type CaravanConnection = {
  __typename?: 'CaravanConnection';
  edges?: Maybe<Array<Maybe<CaravanEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type CaravanEdge = {
  __typename?: 'CaravanEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Caravan>;
};

export type CaravanMembers = {
  __typename?: 'CaravanMembers';
  count?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  key?: Maybe<Scalars['u128']['output']>;
};

export type CaravanMembersConnection = {
  __typename?: 'CaravanMembersConnection';
  edges?: Maybe<Array<Maybe<CaravanMembersEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type CaravanMembersEdge = {
  __typename?: 'CaravanMembersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<CaravanMembers>;
};

export type CaravanMembersOrder = {
  direction: OrderDirection;
  field: CaravanMembersOrderField;
};

export enum CaravanMembersOrderField {
  Count = 'COUNT',
  EntityId = 'ENTITY_ID',
  Key = 'KEY'
}

export type CaravanMembersWhereInput = {
  count?: InputMaybe<Scalars['u32']['input']>;
  countEQ?: InputMaybe<Scalars['u32']['input']>;
  countGT?: InputMaybe<Scalars['u32']['input']>;
  countGTE?: InputMaybe<Scalars['u32']['input']>;
  countLT?: InputMaybe<Scalars['u32']['input']>;
  countLTE?: InputMaybe<Scalars['u32']['input']>;
  countNEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  key?: InputMaybe<Scalars['u128']['input']>;
  keyEQ?: InputMaybe<Scalars['u128']['input']>;
  keyGT?: InputMaybe<Scalars['u128']['input']>;
  keyGTE?: InputMaybe<Scalars['u128']['input']>;
  keyLT?: InputMaybe<Scalars['u128']['input']>;
  keyLTE?: InputMaybe<Scalars['u128']['input']>;
  keyNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type CaravanOrder = {
  direction: OrderDirection;
  field: CaravanOrderField;
};

export enum CaravanOrderField {
  CaravanId = 'CARAVAN_ID',
  EntityId = 'ENTITY_ID'
}

export type CaravanWhereInput = {
  caravan_id?: InputMaybe<Scalars['u128']['input']>;
  caravan_idEQ?: InputMaybe<Scalars['u128']['input']>;
  caravan_idGT?: InputMaybe<Scalars['u128']['input']>;
  caravan_idGTE?: InputMaybe<Scalars['u128']['input']>;
  caravan_idLT?: InputMaybe<Scalars['u128']['input']>;
  caravan_idLTE?: InputMaybe<Scalars['u128']['input']>;
  caravan_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['felt252']['input']>;
  entity_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  entity_idGT?: InputMaybe<Scalars['felt252']['input']>;
  entity_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  entity_idLT?: InputMaybe<Scalars['felt252']['input']>;
  entity_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  model_names?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Entity>;
};

export type EntityMetadata = {
  __typename?: 'EntityMetadata';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  entity_type?: Maybe<Scalars['u128']['output']>;
};

export type EntityMetadataConnection = {
  __typename?: 'EntityMetadataConnection';
  edges?: Maybe<Array<Maybe<EntityMetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EntityMetadataEdge = {
  __typename?: 'EntityMetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<EntityMetadata>;
};

export type EntityMetadataOrder = {
  direction: OrderDirection;
  field: EntityMetadataOrderField;
};

export enum EntityMetadataOrderField {
  EntityId = 'ENTITY_ID',
  EntityType = 'ENTITY_TYPE'
}

export type EntityMetadataWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_type?: InputMaybe<Scalars['u128']['input']>;
  entity_typeEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  systemCall: SystemCall;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Event>;
};

export type ForeignKey = {
  __typename?: 'ForeignKey';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  foreign_key?: Maybe<Scalars['felt252']['output']>;
};

export type ForeignKeyConnection = {
  __typename?: 'ForeignKeyConnection';
  edges?: Maybe<Array<Maybe<ForeignKeyEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ForeignKeyEdge = {
  __typename?: 'ForeignKeyEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<ForeignKey>;
};

export type ForeignKeyOrder = {
  direction: OrderDirection;
  field: ForeignKeyOrderField;
};

export enum ForeignKeyOrderField {
  EntityId = 'ENTITY_ID',
  ForeignKey = 'FOREIGN_KEY'
}

export type ForeignKeyWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  foreign_key?: InputMaybe<Scalars['felt252']['input']>;
  foreign_keyEQ?: InputMaybe<Scalars['felt252']['input']>;
  foreign_keyGT?: InputMaybe<Scalars['felt252']['input']>;
  foreign_keyGTE?: InputMaybe<Scalars['felt252']['input']>;
  foreign_keyLT?: InputMaybe<Scalars['felt252']['input']>;
  foreign_keyLTE?: InputMaybe<Scalars['felt252']['input']>;
  foreign_keyNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type FungibleEntities = {
  __typename?: 'FungibleEntities';
  count?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  key?: Maybe<Scalars['u128']['output']>;
};

export type FungibleEntitiesConnection = {
  __typename?: 'FungibleEntitiesConnection';
  edges?: Maybe<Array<Maybe<FungibleEntitiesEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type FungibleEntitiesEdge = {
  __typename?: 'FungibleEntitiesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<FungibleEntities>;
};

export type FungibleEntitiesOrder = {
  direction: OrderDirection;
  field: FungibleEntitiesOrderField;
};

export enum FungibleEntitiesOrderField {
  Count = 'COUNT',
  EntityId = 'ENTITY_ID',
  Key = 'KEY'
}

export type FungibleEntitiesWhereInput = {
  count?: InputMaybe<Scalars['u32']['input']>;
  countEQ?: InputMaybe<Scalars['u32']['input']>;
  countGT?: InputMaybe<Scalars['u32']['input']>;
  countGTE?: InputMaybe<Scalars['u32']['input']>;
  countLT?: InputMaybe<Scalars['u32']['input']>;
  countLTE?: InputMaybe<Scalars['u32']['input']>;
  countNEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  key?: InputMaybe<Scalars['u128']['input']>;
  keyEQ?: InputMaybe<Scalars['u128']['input']>;
  keyGT?: InputMaybe<Scalars['u128']['input']>;
  keyGTE?: InputMaybe<Scalars['u128']['input']>;
  keyLT?: InputMaybe<Scalars['u128']['input']>;
  keyLTE?: InputMaybe<Scalars['u128']['input']>;
  keyNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type HomePosition = {
  __typename?: 'HomePosition';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  x?: Maybe<Scalars['u32']['output']>;
  y?: Maybe<Scalars['u32']['output']>;
};

export type HomePositionConnection = {
  __typename?: 'HomePositionConnection';
  edges?: Maybe<Array<Maybe<HomePositionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type HomePositionEdge = {
  __typename?: 'HomePositionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<HomePosition>;
};

export type HomePositionOrder = {
  direction: OrderDirection;
  field: HomePositionOrderField;
};

export enum HomePositionOrderField {
  EntityId = 'ENTITY_ID',
  X = 'X',
  Y = 'Y'
}

export type HomePositionWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  x?: InputMaybe<Scalars['u32']['input']>;
  xEQ?: InputMaybe<Scalars['u32']['input']>;
  xGT?: InputMaybe<Scalars['u32']['input']>;
  xGTE?: InputMaybe<Scalars['u32']['input']>;
  xLT?: InputMaybe<Scalars['u32']['input']>;
  xLTE?: InputMaybe<Scalars['u32']['input']>;
  xNEQ?: InputMaybe<Scalars['u32']['input']>;
  y?: InputMaybe<Scalars['u32']['input']>;
  yEQ?: InputMaybe<Scalars['u32']['input']>;
  yGT?: InputMaybe<Scalars['u32']['input']>;
  yGTE?: InputMaybe<Scalars['u32']['input']>;
  yLT?: InputMaybe<Scalars['u32']['input']>;
  yLTE?: InputMaybe<Scalars['u32']['input']>;
  yNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type HyperStructure = {
  __typename?: 'HyperStructure';
  completed_at?: Maybe<Scalars['u64']['output']>;
  construction_resource_count?: Maybe<Scalars['u32']['output']>;
  construction_resource_id?: Maybe<Scalars['u128']['output']>;
  coord_x?: Maybe<Scalars['u32']['output']>;
  coord_y?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  hyperstructure_type?: Maybe<Scalars['u8']['output']>;
  initialization_resource_count?: Maybe<Scalars['u32']['output']>;
  initialization_resource_id?: Maybe<Scalars['u128']['output']>;
  initialized_at?: Maybe<Scalars['u64']['output']>;
};

export type HyperStructureConnection = {
  __typename?: 'HyperStructureConnection';
  edges?: Maybe<Array<Maybe<HyperStructureEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type HyperStructureEdge = {
  __typename?: 'HyperStructureEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<HyperStructure>;
};

export type HyperStructureOrder = {
  direction: OrderDirection;
  field: HyperStructureOrderField;
};

export enum HyperStructureOrderField {
  CompletedAt = 'COMPLETED_AT',
  ConstructionResourceCount = 'CONSTRUCTION_RESOURCE_COUNT',
  ConstructionResourceId = 'CONSTRUCTION_RESOURCE_ID',
  CoordX = 'COORD_X',
  CoordY = 'COORD_Y',
  EntityId = 'ENTITY_ID',
  HyperstructureType = 'HYPERSTRUCTURE_TYPE',
  InitializationResourceCount = 'INITIALIZATION_RESOURCE_COUNT',
  InitializationResourceId = 'INITIALIZATION_RESOURCE_ID',
  InitializedAt = 'INITIALIZED_AT'
}

export type HyperStructureWhereInput = {
  completed_at?: InputMaybe<Scalars['u64']['input']>;
  completed_atEQ?: InputMaybe<Scalars['u64']['input']>;
  completed_atGT?: InputMaybe<Scalars['u64']['input']>;
  completed_atGTE?: InputMaybe<Scalars['u64']['input']>;
  completed_atLT?: InputMaybe<Scalars['u64']['input']>;
  completed_atLTE?: InputMaybe<Scalars['u64']['input']>;
  completed_atNEQ?: InputMaybe<Scalars['u64']['input']>;
  construction_resource_count?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_countEQ?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_countGT?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_countGTE?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_countLT?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_countLTE?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_countNEQ?: InputMaybe<Scalars['u32']['input']>;
  construction_resource_id?: InputMaybe<Scalars['u128']['input']>;
  construction_resource_idEQ?: InputMaybe<Scalars['u128']['input']>;
  construction_resource_idGT?: InputMaybe<Scalars['u128']['input']>;
  construction_resource_idGTE?: InputMaybe<Scalars['u128']['input']>;
  construction_resource_idLT?: InputMaybe<Scalars['u128']['input']>;
  construction_resource_idLTE?: InputMaybe<Scalars['u128']['input']>;
  construction_resource_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  coord_x?: InputMaybe<Scalars['u32']['input']>;
  coord_xEQ?: InputMaybe<Scalars['u32']['input']>;
  coord_xGT?: InputMaybe<Scalars['u32']['input']>;
  coord_xGTE?: InputMaybe<Scalars['u32']['input']>;
  coord_xLT?: InputMaybe<Scalars['u32']['input']>;
  coord_xLTE?: InputMaybe<Scalars['u32']['input']>;
  coord_xNEQ?: InputMaybe<Scalars['u32']['input']>;
  coord_y?: InputMaybe<Scalars['u32']['input']>;
  coord_yEQ?: InputMaybe<Scalars['u32']['input']>;
  coord_yGT?: InputMaybe<Scalars['u32']['input']>;
  coord_yGTE?: InputMaybe<Scalars['u32']['input']>;
  coord_yLT?: InputMaybe<Scalars['u32']['input']>;
  coord_yLTE?: InputMaybe<Scalars['u32']['input']>;
  coord_yNEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  hyperstructure_type?: InputMaybe<Scalars['u8']['input']>;
  hyperstructure_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  hyperstructure_typeGT?: InputMaybe<Scalars['u8']['input']>;
  hyperstructure_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  hyperstructure_typeLT?: InputMaybe<Scalars['u8']['input']>;
  hyperstructure_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  hyperstructure_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
  initialization_resource_count?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_countEQ?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_countGT?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_countGTE?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_countLT?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_countLTE?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_countNEQ?: InputMaybe<Scalars['u32']['input']>;
  initialization_resource_id?: InputMaybe<Scalars['u128']['input']>;
  initialization_resource_idEQ?: InputMaybe<Scalars['u128']['input']>;
  initialization_resource_idGT?: InputMaybe<Scalars['u128']['input']>;
  initialization_resource_idGTE?: InputMaybe<Scalars['u128']['input']>;
  initialization_resource_idLT?: InputMaybe<Scalars['u128']['input']>;
  initialization_resource_idLTE?: InputMaybe<Scalars['u128']['input']>;
  initialization_resource_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  initialized_at?: InputMaybe<Scalars['u64']['input']>;
  initialized_atEQ?: InputMaybe<Scalars['u64']['input']>;
  initialized_atGT?: InputMaybe<Scalars['u64']['input']>;
  initialized_atGTE?: InputMaybe<Scalars['u64']['input']>;
  initialized_atLT?: InputMaybe<Scalars['u64']['input']>;
  initialized_atLTE?: InputMaybe<Scalars['u64']['input']>;
  initialized_atNEQ?: InputMaybe<Scalars['u64']['input']>;
};

export type Labor = {
  __typename?: 'Labor';
  balance?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  last_harvest?: Maybe<Scalars['u64']['output']>;
  multiplier?: Maybe<Scalars['u64']['output']>;
  resource_type?: Maybe<Scalars['u8']['output']>;
};

export type LaborAuction = {
  __typename?: 'LaborAuction';
  decay_constant_mag?: Maybe<Scalars['u128']['output']>;
  decay_constant_sign?: Maybe<Scalars['bool']['output']>;
  entity?: Maybe<Entity>;
  per_time_unit?: Maybe<Scalars['u128']['output']>;
  price_update_interval?: Maybe<Scalars['u128']['output']>;
  sold?: Maybe<Scalars['u128']['output']>;
  start_time?: Maybe<Scalars['u64']['output']>;
  zone?: Maybe<Scalars['u8']['output']>;
};

export type LaborAuctionConnection = {
  __typename?: 'LaborAuctionConnection';
  edges?: Maybe<Array<Maybe<LaborAuctionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type LaborAuctionEdge = {
  __typename?: 'LaborAuctionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<LaborAuction>;
};

export type LaborAuctionOrder = {
  direction: OrderDirection;
  field: LaborAuctionOrderField;
};

export enum LaborAuctionOrderField {
  DecayConstantMag = 'DECAY_CONSTANT_MAG',
  DecayConstantSign = 'DECAY_CONSTANT_SIGN',
  PerTimeUnit = 'PER_TIME_UNIT',
  PriceUpdateInterval = 'PRICE_UPDATE_INTERVAL',
  Sold = 'SOLD',
  StartTime = 'START_TIME',
  Zone = 'ZONE'
}

export type LaborAuctionWhereInput = {
  decay_constant_mag?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_magEQ?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_magGT?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_magGTE?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_magLT?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_magLTE?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_magNEQ?: InputMaybe<Scalars['u128']['input']>;
  decay_constant_sign?: InputMaybe<Scalars['bool']['input']>;
  decay_constant_signEQ?: InputMaybe<Scalars['bool']['input']>;
  decay_constant_signGT?: InputMaybe<Scalars['bool']['input']>;
  decay_constant_signGTE?: InputMaybe<Scalars['bool']['input']>;
  decay_constant_signLT?: InputMaybe<Scalars['bool']['input']>;
  decay_constant_signLTE?: InputMaybe<Scalars['bool']['input']>;
  decay_constant_signNEQ?: InputMaybe<Scalars['bool']['input']>;
  per_time_unit?: InputMaybe<Scalars['u128']['input']>;
  per_time_unitEQ?: InputMaybe<Scalars['u128']['input']>;
  per_time_unitGT?: InputMaybe<Scalars['u128']['input']>;
  per_time_unitGTE?: InputMaybe<Scalars['u128']['input']>;
  per_time_unitLT?: InputMaybe<Scalars['u128']['input']>;
  per_time_unitLTE?: InputMaybe<Scalars['u128']['input']>;
  per_time_unitNEQ?: InputMaybe<Scalars['u128']['input']>;
  price_update_interval?: InputMaybe<Scalars['u128']['input']>;
  price_update_intervalEQ?: InputMaybe<Scalars['u128']['input']>;
  price_update_intervalGT?: InputMaybe<Scalars['u128']['input']>;
  price_update_intervalGTE?: InputMaybe<Scalars['u128']['input']>;
  price_update_intervalLT?: InputMaybe<Scalars['u128']['input']>;
  price_update_intervalLTE?: InputMaybe<Scalars['u128']['input']>;
  price_update_intervalNEQ?: InputMaybe<Scalars['u128']['input']>;
  sold?: InputMaybe<Scalars['u128']['input']>;
  soldEQ?: InputMaybe<Scalars['u128']['input']>;
  soldGT?: InputMaybe<Scalars['u128']['input']>;
  soldGTE?: InputMaybe<Scalars['u128']['input']>;
  soldLT?: InputMaybe<Scalars['u128']['input']>;
  soldLTE?: InputMaybe<Scalars['u128']['input']>;
  soldNEQ?: InputMaybe<Scalars['u128']['input']>;
  start_time?: InputMaybe<Scalars['u64']['input']>;
  start_timeEQ?: InputMaybe<Scalars['u64']['input']>;
  start_timeGT?: InputMaybe<Scalars['u64']['input']>;
  start_timeGTE?: InputMaybe<Scalars['u64']['input']>;
  start_timeLT?: InputMaybe<Scalars['u64']['input']>;
  start_timeLTE?: InputMaybe<Scalars['u64']['input']>;
  start_timeNEQ?: InputMaybe<Scalars['u64']['input']>;
  zone?: InputMaybe<Scalars['u8']['input']>;
  zoneEQ?: InputMaybe<Scalars['u8']['input']>;
  zoneGT?: InputMaybe<Scalars['u8']['input']>;
  zoneGTE?: InputMaybe<Scalars['u8']['input']>;
  zoneLT?: InputMaybe<Scalars['u8']['input']>;
  zoneLTE?: InputMaybe<Scalars['u8']['input']>;
  zoneNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type LaborConfig = {
  __typename?: 'LaborConfig';
  base_food_per_cycle?: Maybe<Scalars['u128']['output']>;
  base_labor_units?: Maybe<Scalars['u64']['output']>;
  base_resources_per_cycle?: Maybe<Scalars['u128']['output']>;
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
};

export type LaborConfigConnection = {
  __typename?: 'LaborConfigConnection';
  edges?: Maybe<Array<Maybe<LaborConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type LaborConfigEdge = {
  __typename?: 'LaborConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<LaborConfig>;
};

export type LaborConfigOrder = {
  direction: OrderDirection;
  field: LaborConfigOrderField;
};

export enum LaborConfigOrderField {
  BaseFoodPerCycle = 'BASE_FOOD_PER_CYCLE',
  BaseLaborUnits = 'BASE_LABOR_UNITS',
  BaseResourcesPerCycle = 'BASE_RESOURCES_PER_CYCLE',
  ConfigId = 'CONFIG_ID'
}

export type LaborConfigWhereInput = {
  base_food_per_cycle?: InputMaybe<Scalars['u128']['input']>;
  base_food_per_cycleEQ?: InputMaybe<Scalars['u128']['input']>;
  base_food_per_cycleGT?: InputMaybe<Scalars['u128']['input']>;
  base_food_per_cycleGTE?: InputMaybe<Scalars['u128']['input']>;
  base_food_per_cycleLT?: InputMaybe<Scalars['u128']['input']>;
  base_food_per_cycleLTE?: InputMaybe<Scalars['u128']['input']>;
  base_food_per_cycleNEQ?: InputMaybe<Scalars['u128']['input']>;
  base_labor_units?: InputMaybe<Scalars['u64']['input']>;
  base_labor_unitsEQ?: InputMaybe<Scalars['u64']['input']>;
  base_labor_unitsGT?: InputMaybe<Scalars['u64']['input']>;
  base_labor_unitsGTE?: InputMaybe<Scalars['u64']['input']>;
  base_labor_unitsLT?: InputMaybe<Scalars['u64']['input']>;
  base_labor_unitsLTE?: InputMaybe<Scalars['u64']['input']>;
  base_labor_unitsNEQ?: InputMaybe<Scalars['u64']['input']>;
  base_resources_per_cycle?: InputMaybe<Scalars['u128']['input']>;
  base_resources_per_cycleEQ?: InputMaybe<Scalars['u128']['input']>;
  base_resources_per_cycleGT?: InputMaybe<Scalars['u128']['input']>;
  base_resources_per_cycleGTE?: InputMaybe<Scalars['u128']['input']>;
  base_resources_per_cycleLT?: InputMaybe<Scalars['u128']['input']>;
  base_resources_per_cycleLTE?: InputMaybe<Scalars['u128']['input']>;
  base_resources_per_cycleNEQ?: InputMaybe<Scalars['u128']['input']>;
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type LaborConnection = {
  __typename?: 'LaborConnection';
  edges?: Maybe<Array<Maybe<LaborEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type LaborCostAmount = {
  __typename?: 'LaborCostAmount';
  entity?: Maybe<Entity>;
  resource_type_cost?: Maybe<Scalars['felt252']['output']>;
  resource_type_labor?: Maybe<Scalars['felt252']['output']>;
  value?: Maybe<Scalars['u128']['output']>;
};

export type LaborCostAmountConnection = {
  __typename?: 'LaborCostAmountConnection';
  edges?: Maybe<Array<Maybe<LaborCostAmountEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type LaborCostAmountEdge = {
  __typename?: 'LaborCostAmountEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<LaborCostAmount>;
};

export type LaborCostAmountOrder = {
  direction: OrderDirection;
  field: LaborCostAmountOrderField;
};

export enum LaborCostAmountOrderField {
  ResourceTypeCost = 'RESOURCE_TYPE_COST',
  ResourceTypeLabor = 'RESOURCE_TYPE_LABOR',
  Value = 'VALUE'
}

export type LaborCostAmountWhereInput = {
  resource_type_cost?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_costEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_costGT?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_costGTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_costLT?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_costLTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_costNEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_labor?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborGT?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborGTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborLT?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborLTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborNEQ?: InputMaybe<Scalars['felt252']['input']>;
  value?: InputMaybe<Scalars['u128']['input']>;
  valueEQ?: InputMaybe<Scalars['u128']['input']>;
  valueGT?: InputMaybe<Scalars['u128']['input']>;
  valueGTE?: InputMaybe<Scalars['u128']['input']>;
  valueLT?: InputMaybe<Scalars['u128']['input']>;
  valueLTE?: InputMaybe<Scalars['u128']['input']>;
  valueNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type LaborCostResources = {
  __typename?: 'LaborCostResources';
  entity?: Maybe<Entity>;
  resource_type_labor?: Maybe<Scalars['felt252']['output']>;
  resource_types_count?: Maybe<Scalars['u8']['output']>;
  resource_types_packed?: Maybe<Scalars['u128']['output']>;
};

export type LaborCostResourcesConnection = {
  __typename?: 'LaborCostResourcesConnection';
  edges?: Maybe<Array<Maybe<LaborCostResourcesEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type LaborCostResourcesEdge = {
  __typename?: 'LaborCostResourcesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<LaborCostResources>;
};

export type LaborCostResourcesOrder = {
  direction: OrderDirection;
  field: LaborCostResourcesOrderField;
};

export enum LaborCostResourcesOrderField {
  ResourceTypesCount = 'RESOURCE_TYPES_COUNT',
  ResourceTypesPacked = 'RESOURCE_TYPES_PACKED',
  ResourceTypeLabor = 'RESOURCE_TYPE_LABOR'
}

export type LaborCostResourcesWhereInput = {
  resource_type_labor?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborGT?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborGTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborLT?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborLTE?: InputMaybe<Scalars['felt252']['input']>;
  resource_type_laborNEQ?: InputMaybe<Scalars['felt252']['input']>;
  resource_types_count?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countGT?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countLT?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_packed?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedEQ?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedGT?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedGTE?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedLT?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedLTE?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type LaborEdge = {
  __typename?: 'LaborEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Labor>;
};

export type LaborOrder = {
  direction: OrderDirection;
  field: LaborOrderField;
};

export enum LaborOrderField {
  Balance = 'BALANCE',
  EntityId = 'ENTITY_ID',
  LastHarvest = 'LAST_HARVEST',
  Multiplier = 'MULTIPLIER',
  ResourceType = 'RESOURCE_TYPE'
}

export type LaborWhereInput = {
  balance?: InputMaybe<Scalars['u64']['input']>;
  balanceEQ?: InputMaybe<Scalars['u64']['input']>;
  balanceGT?: InputMaybe<Scalars['u64']['input']>;
  balanceGTE?: InputMaybe<Scalars['u64']['input']>;
  balanceLT?: InputMaybe<Scalars['u64']['input']>;
  balanceLTE?: InputMaybe<Scalars['u64']['input']>;
  balanceNEQ?: InputMaybe<Scalars['u64']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  last_harvest?: InputMaybe<Scalars['u64']['input']>;
  last_harvestEQ?: InputMaybe<Scalars['u64']['input']>;
  last_harvestGT?: InputMaybe<Scalars['u64']['input']>;
  last_harvestGTE?: InputMaybe<Scalars['u64']['input']>;
  last_harvestLT?: InputMaybe<Scalars['u64']['input']>;
  last_harvestLTE?: InputMaybe<Scalars['u64']['input']>;
  last_harvestNEQ?: InputMaybe<Scalars['u64']['input']>;
  multiplier?: InputMaybe<Scalars['u64']['input']>;
  multiplierEQ?: InputMaybe<Scalars['u64']['input']>;
  multiplierGT?: InputMaybe<Scalars['u64']['input']>;
  multiplierGTE?: InputMaybe<Scalars['u64']['input']>;
  multiplierLT?: InputMaybe<Scalars['u64']['input']>;
  multiplierLTE?: InputMaybe<Scalars['u64']['input']>;
  multiplierNEQ?: InputMaybe<Scalars['u64']['input']>;
  resource_type?: InputMaybe<Scalars['u8']['input']>;
  resource_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Map = {
  __typename?: 'Map';
  affinity?: Maybe<Scalars['felt252']['output']>;
  doors1?: Maybe<Scalars['felt252']['output']>;
  doors2?: Maybe<Scalars['felt252']['output']>;
  doors3?: Maybe<Scalars['felt252']['output']>;
  dungeon_name1?: Maybe<Scalars['felt252']['output']>;
  dungeon_name2?: Maybe<Scalars['felt252']['output']>;
  dungeon_name3?: Maybe<Scalars['felt252']['output']>;
  dungeon_name4?: Maybe<Scalars['felt252']['output']>;
  dungeon_name5?: Maybe<Scalars['felt252']['output']>;
  entity?: Maybe<Entity>;
  environment?: Maybe<Scalars['u8']['output']>;
  layout1?: Maybe<Scalars['felt252']['output']>;
  layout2?: Maybe<Scalars['felt252']['output']>;
  layout3?: Maybe<Scalars['felt252']['output']>;
  legendary?: Maybe<Scalars['u8']['output']>;
  owner?: Maybe<Scalars['ContractAddress']['output']>;
  points1?: Maybe<Scalars['felt252']['output']>;
  points2?: Maybe<Scalars['felt252']['output']>;
  points3?: Maybe<Scalars['felt252']['output']>;
  size?: Maybe<Scalars['u8']['output']>;
  structure?: Maybe<Scalars['u8']['output']>;
  token_id?: Maybe<Scalars['u128']['output']>;
};

export type MapConnection = {
  __typename?: 'MapConnection';
  edges?: Maybe<Array<Maybe<MapEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MapEdge = {
  __typename?: 'MapEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Map>;
};

export type MapOrder = {
  direction: OrderDirection;
  field: MapOrderField;
};

export enum MapOrderField {
  Affinity = 'AFFINITY',
  Doors1 = 'DOORS1',
  Doors2 = 'DOORS2',
  Doors3 = 'DOORS3',
  DungeonName1 = 'DUNGEON_NAME1',
  DungeonName2 = 'DUNGEON_NAME2',
  DungeonName3 = 'DUNGEON_NAME3',
  DungeonName4 = 'DUNGEON_NAME4',
  DungeonName5 = 'DUNGEON_NAME5',
  Environment = 'ENVIRONMENT',
  Layout1 = 'LAYOUT1',
  Layout2 = 'LAYOUT2',
  Layout3 = 'LAYOUT3',
  Legendary = 'LEGENDARY',
  Owner = 'OWNER',
  Points1 = 'POINTS1',
  Points2 = 'POINTS2',
  Points3 = 'POINTS3',
  Size = 'SIZE',
  Structure = 'STRUCTURE',
  TokenId = 'TOKEN_ID'
}

export type MapWhereInput = {
  affinity?: InputMaybe<Scalars['felt252']['input']>;
  affinityEQ?: InputMaybe<Scalars['felt252']['input']>;
  affinityGT?: InputMaybe<Scalars['felt252']['input']>;
  affinityGTE?: InputMaybe<Scalars['felt252']['input']>;
  affinityLT?: InputMaybe<Scalars['felt252']['input']>;
  affinityLTE?: InputMaybe<Scalars['felt252']['input']>;
  affinityNEQ?: InputMaybe<Scalars['felt252']['input']>;
  doors1?: InputMaybe<Scalars['felt252']['input']>;
  doors1EQ?: InputMaybe<Scalars['felt252']['input']>;
  doors1GT?: InputMaybe<Scalars['felt252']['input']>;
  doors1GTE?: InputMaybe<Scalars['felt252']['input']>;
  doors1LT?: InputMaybe<Scalars['felt252']['input']>;
  doors1LTE?: InputMaybe<Scalars['felt252']['input']>;
  doors1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  doors2?: InputMaybe<Scalars['felt252']['input']>;
  doors2EQ?: InputMaybe<Scalars['felt252']['input']>;
  doors2GT?: InputMaybe<Scalars['felt252']['input']>;
  doors2GTE?: InputMaybe<Scalars['felt252']['input']>;
  doors2LT?: InputMaybe<Scalars['felt252']['input']>;
  doors2LTE?: InputMaybe<Scalars['felt252']['input']>;
  doors2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  doors3?: InputMaybe<Scalars['felt252']['input']>;
  doors3EQ?: InputMaybe<Scalars['felt252']['input']>;
  doors3GT?: InputMaybe<Scalars['felt252']['input']>;
  doors3GTE?: InputMaybe<Scalars['felt252']['input']>;
  doors3LT?: InputMaybe<Scalars['felt252']['input']>;
  doors3LTE?: InputMaybe<Scalars['felt252']['input']>;
  doors3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5NEQ?: InputMaybe<Scalars['felt252']['input']>;
  environment?: InputMaybe<Scalars['u8']['input']>;
  environmentEQ?: InputMaybe<Scalars['u8']['input']>;
  environmentGT?: InputMaybe<Scalars['u8']['input']>;
  environmentGTE?: InputMaybe<Scalars['u8']['input']>;
  environmentLT?: InputMaybe<Scalars['u8']['input']>;
  environmentLTE?: InputMaybe<Scalars['u8']['input']>;
  environmentNEQ?: InputMaybe<Scalars['u8']['input']>;
  layout1?: InputMaybe<Scalars['felt252']['input']>;
  layout1EQ?: InputMaybe<Scalars['felt252']['input']>;
  layout1GT?: InputMaybe<Scalars['felt252']['input']>;
  layout1GTE?: InputMaybe<Scalars['felt252']['input']>;
  layout1LT?: InputMaybe<Scalars['felt252']['input']>;
  layout1LTE?: InputMaybe<Scalars['felt252']['input']>;
  layout1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  layout2?: InputMaybe<Scalars['felt252']['input']>;
  layout2EQ?: InputMaybe<Scalars['felt252']['input']>;
  layout2GT?: InputMaybe<Scalars['felt252']['input']>;
  layout2GTE?: InputMaybe<Scalars['felt252']['input']>;
  layout2LT?: InputMaybe<Scalars['felt252']['input']>;
  layout2LTE?: InputMaybe<Scalars['felt252']['input']>;
  layout2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  layout3?: InputMaybe<Scalars['felt252']['input']>;
  layout3EQ?: InputMaybe<Scalars['felt252']['input']>;
  layout3GT?: InputMaybe<Scalars['felt252']['input']>;
  layout3GTE?: InputMaybe<Scalars['felt252']['input']>;
  layout3LT?: InputMaybe<Scalars['felt252']['input']>;
  layout3LTE?: InputMaybe<Scalars['felt252']['input']>;
  layout3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  legendary?: InputMaybe<Scalars['u8']['input']>;
  legendaryEQ?: InputMaybe<Scalars['u8']['input']>;
  legendaryGT?: InputMaybe<Scalars['u8']['input']>;
  legendaryGTE?: InputMaybe<Scalars['u8']['input']>;
  legendaryLT?: InputMaybe<Scalars['u8']['input']>;
  legendaryLTE?: InputMaybe<Scalars['u8']['input']>;
  legendaryNEQ?: InputMaybe<Scalars['u8']['input']>;
  owner?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  points1?: InputMaybe<Scalars['felt252']['input']>;
  points1EQ?: InputMaybe<Scalars['felt252']['input']>;
  points1GT?: InputMaybe<Scalars['felt252']['input']>;
  points1GTE?: InputMaybe<Scalars['felt252']['input']>;
  points1LT?: InputMaybe<Scalars['felt252']['input']>;
  points1LTE?: InputMaybe<Scalars['felt252']['input']>;
  points1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  points2?: InputMaybe<Scalars['felt252']['input']>;
  points2EQ?: InputMaybe<Scalars['felt252']['input']>;
  points2GT?: InputMaybe<Scalars['felt252']['input']>;
  points2GTE?: InputMaybe<Scalars['felt252']['input']>;
  points2LT?: InputMaybe<Scalars['felt252']['input']>;
  points2LTE?: InputMaybe<Scalars['felt252']['input']>;
  points2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  points3?: InputMaybe<Scalars['felt252']['input']>;
  points3EQ?: InputMaybe<Scalars['felt252']['input']>;
  points3GT?: InputMaybe<Scalars['felt252']['input']>;
  points3GTE?: InputMaybe<Scalars['felt252']['input']>;
  points3LT?: InputMaybe<Scalars['felt252']['input']>;
  points3LTE?: InputMaybe<Scalars['felt252']['input']>;
  points3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  size?: InputMaybe<Scalars['u8']['input']>;
  sizeEQ?: InputMaybe<Scalars['u8']['input']>;
  sizeGT?: InputMaybe<Scalars['u8']['input']>;
  sizeGTE?: InputMaybe<Scalars['u8']['input']>;
  sizeLT?: InputMaybe<Scalars['u8']['input']>;
  sizeLTE?: InputMaybe<Scalars['u8']['input']>;
  sizeNEQ?: InputMaybe<Scalars['u8']['input']>;
  structure?: InputMaybe<Scalars['u8']['input']>;
  structureEQ?: InputMaybe<Scalars['u8']['input']>;
  structureGT?: InputMaybe<Scalars['u8']['input']>;
  structureGTE?: InputMaybe<Scalars['u8']['input']>;
  structureLT?: InputMaybe<Scalars['u8']['input']>;
  structureLTE?: InputMaybe<Scalars['u8']['input']>;
  structureNEQ?: InputMaybe<Scalars['u8']['input']>;
  token_id?: InputMaybe<Scalars['u128']['input']>;
  token_idEQ?: InputMaybe<Scalars['u128']['input']>;
  token_idGT?: InputMaybe<Scalars['u128']['input']>;
  token_idGTE?: InputMaybe<Scalars['u128']['input']>;
  token_idLT?: InputMaybe<Scalars['u128']['input']>;
  token_idLTE?: InputMaybe<Scalars['u128']['input']>;
  token_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id?: Maybe<Scalars['ID']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type MetadataConnection = {
  __typename?: 'MetadataConnection';
  edges?: Maybe<Array<Maybe<MetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MetadataEdge = {
  __typename?: 'MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Metadata>;
};

export type Model = {
  __typename?: 'Model';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Model>;
};

export type ModelUnion = Age | ArrivalTime | BuildingConfig | BuildingCost | BuildingTypeConfig | Capacity | CapacityConfig | Caravan | CaravanMembers | EntityMetadata | ForeignKey | FungibleEntities | HomePosition | HyperStructure | Labor | LaborAuction | LaborConfig | LaborCostAmount | LaborCostResources | Map | Movable | OrderId | OrderResource | Owner | Position | Quantity | QuantityTracker | Realm | Resource | ResourceCost | Road | RoadConfig | SpeedConfig | Status | Trade | TravelConfig | Vault | WeightConfig | WorldConfig;

export type Movable = {
  __typename?: 'Movable';
  blocked?: Maybe<Scalars['bool']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  sec_per_km?: Maybe<Scalars['u16']['output']>;
};

export type MovableConnection = {
  __typename?: 'MovableConnection';
  edges?: Maybe<Array<Maybe<MovableEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MovableEdge = {
  __typename?: 'MovableEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Movable>;
};

export type MovableOrder = {
  direction: OrderDirection;
  field: MovableOrderField;
};

export enum MovableOrderField {
  Blocked = 'BLOCKED',
  EntityId = 'ENTITY_ID',
  SecPerKm = 'SEC_PER_KM'
}

export type MovableWhereInput = {
  blocked?: InputMaybe<Scalars['bool']['input']>;
  blockedEQ?: InputMaybe<Scalars['bool']['input']>;
  blockedGT?: InputMaybe<Scalars['bool']['input']>;
  blockedGTE?: InputMaybe<Scalars['bool']['input']>;
  blockedLT?: InputMaybe<Scalars['bool']['input']>;
  blockedLTE?: InputMaybe<Scalars['bool']['input']>;
  blockedNEQ?: InputMaybe<Scalars['bool']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  sec_per_km?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmEQ?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmGT?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmGTE?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmLT?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmLTE?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmNEQ?: InputMaybe<Scalars['u16']['input']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderId = {
  __typename?: 'OrderId';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  id?: Maybe<Scalars['u128']['output']>;
};

export type OrderIdConnection = {
  __typename?: 'OrderIdConnection';
  edges?: Maybe<Array<Maybe<OrderIdEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type OrderIdEdge = {
  __typename?: 'OrderIdEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<OrderId>;
};

export type OrderIdOrder = {
  direction: OrderDirection;
  field: OrderIdOrderField;
};

export enum OrderIdOrderField {
  EntityId = 'ENTITY_ID',
  Id = 'ID'
}

export type OrderIdWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  id?: InputMaybe<Scalars['u128']['input']>;
  idEQ?: InputMaybe<Scalars['u128']['input']>;
  idGT?: InputMaybe<Scalars['u128']['input']>;
  idGTE?: InputMaybe<Scalars['u128']['input']>;
  idLT?: InputMaybe<Scalars['u128']['input']>;
  idLTE?: InputMaybe<Scalars['u128']['input']>;
  idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type OrderResource = {
  __typename?: 'OrderResource';
  balance?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  fungible_entities_id?: Maybe<Scalars['u128']['output']>;
  index?: Maybe<Scalars['u32']['output']>;
  order_id?: Maybe<Scalars['u128']['output']>;
  resource_type?: Maybe<Scalars['u8']['output']>;
};

export type OrderResourceConnection = {
  __typename?: 'OrderResourceConnection';
  edges?: Maybe<Array<Maybe<OrderResourceEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type OrderResourceEdge = {
  __typename?: 'OrderResourceEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<OrderResource>;
};

export type OrderResourceOrder = {
  direction: OrderDirection;
  field: OrderResourceOrderField;
};

export enum OrderResourceOrderField {
  Balance = 'BALANCE',
  FungibleEntitiesId = 'FUNGIBLE_ENTITIES_ID',
  Index = 'INDEX',
  OrderId = 'ORDER_ID',
  ResourceType = 'RESOURCE_TYPE'
}

export type OrderResourceWhereInput = {
  balance?: InputMaybe<Scalars['u128']['input']>;
  balanceEQ?: InputMaybe<Scalars['u128']['input']>;
  balanceGT?: InputMaybe<Scalars['u128']['input']>;
  balanceGTE?: InputMaybe<Scalars['u128']['input']>;
  balanceLT?: InputMaybe<Scalars['u128']['input']>;
  balanceLTE?: InputMaybe<Scalars['u128']['input']>;
  balanceNEQ?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_id?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_idEQ?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_idGT?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_idGTE?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_idLT?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_idLTE?: InputMaybe<Scalars['u128']['input']>;
  fungible_entities_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  index?: InputMaybe<Scalars['u32']['input']>;
  indexEQ?: InputMaybe<Scalars['u32']['input']>;
  indexGT?: InputMaybe<Scalars['u32']['input']>;
  indexGTE?: InputMaybe<Scalars['u32']['input']>;
  indexLT?: InputMaybe<Scalars['u32']['input']>;
  indexLTE?: InputMaybe<Scalars['u32']['input']>;
  indexNEQ?: InputMaybe<Scalars['u32']['input']>;
  order_id?: InputMaybe<Scalars['u128']['input']>;
  order_idEQ?: InputMaybe<Scalars['u128']['input']>;
  order_idGT?: InputMaybe<Scalars['u128']['input']>;
  order_idGTE?: InputMaybe<Scalars['u128']['input']>;
  order_idLT?: InputMaybe<Scalars['u128']['input']>;
  order_idLTE?: InputMaybe<Scalars['u128']['input']>;
  order_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  resource_type?: InputMaybe<Scalars['u8']['input']>;
  resource_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Owner = {
  __typename?: 'Owner';
  address?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
};

export type OwnerConnection = {
  __typename?: 'OwnerConnection';
  edges?: Maybe<Array<Maybe<OwnerEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type OwnerEdge = {
  __typename?: 'OwnerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Owner>;
};

export type OwnerOrder = {
  direction: OrderDirection;
  field: OwnerOrderField;
};

export enum OwnerOrderField {
  Address = 'ADDRESS',
  EntityId = 'ENTITY_ID'
}

export type OwnerWhereInput = {
  address?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Position = {
  __typename?: 'Position';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  x?: Maybe<Scalars['u32']['output']>;
  y?: Maybe<Scalars['u32']['output']>;
};

export type PositionConnection = {
  __typename?: 'PositionConnection';
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type PositionEdge = {
  __typename?: 'PositionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Position>;
};

export type PositionOrder = {
  direction: OrderDirection;
  field: PositionOrderField;
};

export enum PositionOrderField {
  EntityId = 'ENTITY_ID',
  X = 'X',
  Y = 'Y'
}

export type PositionWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  x?: InputMaybe<Scalars['u32']['input']>;
  xEQ?: InputMaybe<Scalars['u32']['input']>;
  xGT?: InputMaybe<Scalars['u32']['input']>;
  xGTE?: InputMaybe<Scalars['u32']['input']>;
  xLT?: InputMaybe<Scalars['u32']['input']>;
  xLTE?: InputMaybe<Scalars['u32']['input']>;
  xNEQ?: InputMaybe<Scalars['u32']['input']>;
  y?: InputMaybe<Scalars['u32']['input']>;
  yEQ?: InputMaybe<Scalars['u32']['input']>;
  yGT?: InputMaybe<Scalars['u32']['input']>;
  yGTE?: InputMaybe<Scalars['u32']['input']>;
  yLT?: InputMaybe<Scalars['u32']['input']>;
  yLTE?: InputMaybe<Scalars['u32']['input']>;
  yNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type Quantity = {
  __typename?: 'Quantity';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  value?: Maybe<Scalars['u128']['output']>;
};

export type QuantityConnection = {
  __typename?: 'QuantityConnection';
  edges?: Maybe<Array<Maybe<QuantityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type QuantityEdge = {
  __typename?: 'QuantityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Quantity>;
};

export type QuantityOrder = {
  direction: OrderDirection;
  field: QuantityOrderField;
};

export enum QuantityOrderField {
  EntityId = 'ENTITY_ID',
  Value = 'VALUE'
}

export type QuantityTracker = {
  __typename?: 'QuantityTracker';
  count?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['felt252']['output']>;
};

export type QuantityTrackerConnection = {
  __typename?: 'QuantityTrackerConnection';
  edges?: Maybe<Array<Maybe<QuantityTrackerEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type QuantityTrackerEdge = {
  __typename?: 'QuantityTrackerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<QuantityTracker>;
};

export type QuantityTrackerOrder = {
  direction: OrderDirection;
  field: QuantityTrackerOrderField;
};

export enum QuantityTrackerOrderField {
  Count = 'COUNT',
  EntityId = 'ENTITY_ID'
}

export type QuantityTrackerWhereInput = {
  count?: InputMaybe<Scalars['u128']['input']>;
  countEQ?: InputMaybe<Scalars['u128']['input']>;
  countGT?: InputMaybe<Scalars['u128']['input']>;
  countGTE?: InputMaybe<Scalars['u128']['input']>;
  countLT?: InputMaybe<Scalars['u128']['input']>;
  countLTE?: InputMaybe<Scalars['u128']['input']>;
  countNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['felt252']['input']>;
  entity_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  entity_idGT?: InputMaybe<Scalars['felt252']['input']>;
  entity_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  entity_idLT?: InputMaybe<Scalars['felt252']['input']>;
  entity_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type QuantityWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  value?: InputMaybe<Scalars['u128']['input']>;
  valueEQ?: InputMaybe<Scalars['u128']['input']>;
  valueGT?: InputMaybe<Scalars['u128']['input']>;
  valueGTE?: InputMaybe<Scalars['u128']['input']>;
  valueLT?: InputMaybe<Scalars['u128']['input']>;
  valueLTE?: InputMaybe<Scalars['u128']['input']>;
  valueNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Query = {
  __typename?: 'Query';
  ageModels?: Maybe<AgeConnection>;
  arrivaltimeModels?: Maybe<ArrivalTimeConnection>;
  buildingconfigModels?: Maybe<BuildingConfigConnection>;
  buildingcostModels?: Maybe<BuildingCostConnection>;
  buildingtypeconfigModels?: Maybe<BuildingTypeConfigConnection>;
  capacityModels?: Maybe<CapacityConnection>;
  capacityconfigModels?: Maybe<CapacityConfigConnection>;
  caravanModels?: Maybe<CaravanConnection>;
  caravanmembersModels?: Maybe<CaravanMembersConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  entitymetadataModels?: Maybe<EntityMetadataConnection>;
  events?: Maybe<EventConnection>;
  foreignkeyModels?: Maybe<ForeignKeyConnection>;
  fungibleentitiesModels?: Maybe<FungibleEntitiesConnection>;
  homepositionModels?: Maybe<HomePositionConnection>;
  hyperstructureModels?: Maybe<HyperStructureConnection>;
  laborModels?: Maybe<LaborConnection>;
  laborauctionModels?: Maybe<LaborAuctionConnection>;
  laborconfigModels?: Maybe<LaborConfigConnection>;
  laborcostamountModels?: Maybe<LaborCostAmountConnection>;
  laborcostresourcesModels?: Maybe<LaborCostResourcesConnection>;
  mapModels?: Maybe<MapConnection>;
  metadata: Metadata;
  metadatas?: Maybe<MetadataConnection>;
  model: Model;
  models?: Maybe<ModelConnection>;
  movableModels?: Maybe<MovableConnection>;
  orderidModels?: Maybe<OrderIdConnection>;
  orderresourceModels?: Maybe<OrderResourceConnection>;
  ownerModels?: Maybe<OwnerConnection>;
  positionModels?: Maybe<PositionConnection>;
  quantityModels?: Maybe<QuantityConnection>;
  quantitytrackerModels?: Maybe<QuantityTrackerConnection>;
  realmModels?: Maybe<RealmConnection>;
  resourceModels?: Maybe<ResourceConnection>;
  resourcecostModels?: Maybe<ResourceCostConnection>;
  roadModels?: Maybe<RoadConnection>;
  roadconfigModels?: Maybe<RoadConfigConnection>;
  speedconfigModels?: Maybe<SpeedConfigConnection>;
  statusModels?: Maybe<StatusConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
  tradeModels?: Maybe<TradeConnection>;
  travelconfigModels?: Maybe<TravelConfigConnection>;
  vaultModels?: Maybe<VaultConnection>;
  weightconfigModels?: Maybe<WeightConfigConnection>;
  worldconfigModels?: Maybe<WorldConfigConnection>;
};


export type QueryAgeModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AgeOrder>;
  where?: InputMaybe<AgeWhereInput>;
};


export type QueryArrivaltimeModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ArrivalTimeOrder>;
  where?: InputMaybe<ArrivalTimeWhereInput>;
};


export type QueryBuildingconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<BuildingConfigOrder>;
  where?: InputMaybe<BuildingConfigWhereInput>;
};


export type QueryBuildingcostModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<BuildingCostOrder>;
  where?: InputMaybe<BuildingCostWhereInput>;
};


export type QueryBuildingtypeconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<BuildingTypeConfigOrder>;
  where?: InputMaybe<BuildingTypeConfigWhereInput>;
};


export type QueryCapacityModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CapacityOrder>;
  where?: InputMaybe<CapacityWhereInput>;
};


export type QueryCapacityconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CapacityConfigOrder>;
  where?: InputMaybe<CapacityConfigWhereInput>;
};


export type QueryCaravanModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CaravanOrder>;
  where?: InputMaybe<CaravanWhereInput>;
};


export type QueryCaravanmembersModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CaravanMembersOrder>;
  where?: InputMaybe<CaravanMembersWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEntitymetadataModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EntityMetadataOrder>;
  where?: InputMaybe<EntityMetadataWhereInput>;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryForeignkeyModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ForeignKeyOrder>;
  where?: InputMaybe<ForeignKeyWhereInput>;
};


export type QueryFungibleentitiesModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<FungibleEntitiesOrder>;
  where?: InputMaybe<FungibleEntitiesWhereInput>;
};


export type QueryHomepositionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<HomePositionOrder>;
  where?: InputMaybe<HomePositionWhereInput>;
};


export type QueryHyperstructureModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<HyperStructureOrder>;
  where?: InputMaybe<HyperStructureWhereInput>;
};


export type QueryLaborModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LaborOrder>;
  where?: InputMaybe<LaborWhereInput>;
};


export type QueryLaborauctionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LaborAuctionOrder>;
  where?: InputMaybe<LaborAuctionWhereInput>;
};


export type QueryLaborconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LaborConfigOrder>;
  where?: InputMaybe<LaborConfigWhereInput>;
};


export type QueryLaborcostamountModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LaborCostAmountOrder>;
  where?: InputMaybe<LaborCostAmountWhereInput>;
};


export type QueryLaborcostresourcesModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LaborCostResourcesOrder>;
  where?: InputMaybe<LaborCostResourcesWhereInput>;
};


export type QueryMapModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MapOrder>;
  where?: InputMaybe<MapWhereInput>;
};


export type QueryMetadataArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovableModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MovableOrder>;
  where?: InputMaybe<MovableWhereInput>;
};


export type QueryOrderidModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderIdOrder>;
  where?: InputMaybe<OrderIdWhereInput>;
};


export type QueryOrderresourceModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderResourceOrder>;
  where?: InputMaybe<OrderResourceWhereInput>;
};


export type QueryOwnerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OwnerOrder>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryPositionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PositionOrder>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryQuantityModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QuantityOrder>;
  where?: InputMaybe<QuantityWhereInput>;
};


export type QueryQuantitytrackerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QuantityTrackerOrder>;
  where?: InputMaybe<QuantityTrackerWhereInput>;
};


export type QueryRealmModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RealmOrder>;
  where?: InputMaybe<RealmWhereInput>;
};


export type QueryResourceModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ResourceOrder>;
  where?: InputMaybe<ResourceWhereInput>;
};


export type QueryResourcecostModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ResourceCostOrder>;
  where?: InputMaybe<ResourceCostWhereInput>;
};


export type QueryRoadModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RoadOrder>;
  where?: InputMaybe<RoadWhereInput>;
};


export type QueryRoadconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RoadConfigOrder>;
  where?: InputMaybe<RoadConfigWhereInput>;
};


export type QuerySpeedconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SpeedConfigOrder>;
  where?: InputMaybe<SpeedConfigWhereInput>;
};


export type QueryStatusModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StatusOrder>;
  where?: InputMaybe<StatusWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTradeModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TradeOrder>;
  where?: InputMaybe<TradeWhereInput>;
};


export type QueryTravelconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TravelConfigOrder>;
  where?: InputMaybe<TravelConfigWhereInput>;
};


export type QueryVaultModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VaultOrder>;
  where?: InputMaybe<VaultWhereInput>;
};


export type QueryWeightconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<WeightConfigOrder>;
  where?: InputMaybe<WeightConfigWhereInput>;
};


export type QueryWorldconfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<WorldConfigOrder>;
  where?: InputMaybe<WorldConfigWhereInput>;
};

export type Realm = {
  __typename?: 'Realm';
  cities?: Maybe<Scalars['u8']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  harbors?: Maybe<Scalars['u8']['output']>;
  order?: Maybe<Scalars['u8']['output']>;
  realm_id?: Maybe<Scalars['u128']['output']>;
  regions?: Maybe<Scalars['u8']['output']>;
  resource_types_count?: Maybe<Scalars['u8']['output']>;
  resource_types_packed?: Maybe<Scalars['u128']['output']>;
  rivers?: Maybe<Scalars['u8']['output']>;
  wonder?: Maybe<Scalars['u8']['output']>;
};

export type RealmConnection = {
  __typename?: 'RealmConnection';
  edges?: Maybe<Array<Maybe<RealmEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type RealmEdge = {
  __typename?: 'RealmEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Realm>;
};

export type RealmOrder = {
  direction: OrderDirection;
  field: RealmOrderField;
};

export enum RealmOrderField {
  Cities = 'CITIES',
  EntityId = 'ENTITY_ID',
  Harbors = 'HARBORS',
  Order = 'ORDER',
  RealmId = 'REALM_ID',
  Regions = 'REGIONS',
  ResourceTypesCount = 'RESOURCE_TYPES_COUNT',
  ResourceTypesPacked = 'RESOURCE_TYPES_PACKED',
  Rivers = 'RIVERS',
  Wonder = 'WONDER'
}

export type RealmWhereInput = {
  cities?: InputMaybe<Scalars['u8']['input']>;
  citiesEQ?: InputMaybe<Scalars['u8']['input']>;
  citiesGT?: InputMaybe<Scalars['u8']['input']>;
  citiesGTE?: InputMaybe<Scalars['u8']['input']>;
  citiesLT?: InputMaybe<Scalars['u8']['input']>;
  citiesLTE?: InputMaybe<Scalars['u8']['input']>;
  citiesNEQ?: InputMaybe<Scalars['u8']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  harbors?: InputMaybe<Scalars['u8']['input']>;
  harborsEQ?: InputMaybe<Scalars['u8']['input']>;
  harborsGT?: InputMaybe<Scalars['u8']['input']>;
  harborsGTE?: InputMaybe<Scalars['u8']['input']>;
  harborsLT?: InputMaybe<Scalars['u8']['input']>;
  harborsLTE?: InputMaybe<Scalars['u8']['input']>;
  harborsNEQ?: InputMaybe<Scalars['u8']['input']>;
  order?: InputMaybe<Scalars['u8']['input']>;
  orderEQ?: InputMaybe<Scalars['u8']['input']>;
  orderGT?: InputMaybe<Scalars['u8']['input']>;
  orderGTE?: InputMaybe<Scalars['u8']['input']>;
  orderLT?: InputMaybe<Scalars['u8']['input']>;
  orderLTE?: InputMaybe<Scalars['u8']['input']>;
  orderNEQ?: InputMaybe<Scalars['u8']['input']>;
  realm_id?: InputMaybe<Scalars['u128']['input']>;
  realm_idEQ?: InputMaybe<Scalars['u128']['input']>;
  realm_idGT?: InputMaybe<Scalars['u128']['input']>;
  realm_idGTE?: InputMaybe<Scalars['u128']['input']>;
  realm_idLT?: InputMaybe<Scalars['u128']['input']>;
  realm_idLTE?: InputMaybe<Scalars['u128']['input']>;
  realm_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  regions?: InputMaybe<Scalars['u8']['input']>;
  regionsEQ?: InputMaybe<Scalars['u8']['input']>;
  regionsGT?: InputMaybe<Scalars['u8']['input']>;
  regionsGTE?: InputMaybe<Scalars['u8']['input']>;
  regionsLT?: InputMaybe<Scalars['u8']['input']>;
  regionsLTE?: InputMaybe<Scalars['u8']['input']>;
  regionsNEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_count?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countGT?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countLT?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_types_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_types_packed?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedEQ?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedGT?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedGTE?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedLT?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedLTE?: InputMaybe<Scalars['u128']['input']>;
  resource_types_packedNEQ?: InputMaybe<Scalars['u128']['input']>;
  rivers?: InputMaybe<Scalars['u8']['input']>;
  riversEQ?: InputMaybe<Scalars['u8']['input']>;
  riversGT?: InputMaybe<Scalars['u8']['input']>;
  riversGTE?: InputMaybe<Scalars['u8']['input']>;
  riversLT?: InputMaybe<Scalars['u8']['input']>;
  riversLTE?: InputMaybe<Scalars['u8']['input']>;
  riversNEQ?: InputMaybe<Scalars['u8']['input']>;
  wonder?: InputMaybe<Scalars['u8']['input']>;
  wonderEQ?: InputMaybe<Scalars['u8']['input']>;
  wonderGT?: InputMaybe<Scalars['u8']['input']>;
  wonderGTE?: InputMaybe<Scalars['u8']['input']>;
  wonderLT?: InputMaybe<Scalars['u8']['input']>;
  wonderLTE?: InputMaybe<Scalars['u8']['input']>;
  wonderNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Resource = {
  __typename?: 'Resource';
  balance?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  resource_type?: Maybe<Scalars['u8']['output']>;
};

export type ResourceConnection = {
  __typename?: 'ResourceConnection';
  edges?: Maybe<Array<Maybe<ResourceEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ResourceCost = {
  __typename?: 'ResourceCost';
  amount?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  index?: Maybe<Scalars['u32']['output']>;
  resource_type?: Maybe<Scalars['u8']['output']>;
};

export type ResourceCostConnection = {
  __typename?: 'ResourceCostConnection';
  edges?: Maybe<Array<Maybe<ResourceCostEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ResourceCostEdge = {
  __typename?: 'ResourceCostEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<ResourceCost>;
};

export type ResourceCostOrder = {
  direction: OrderDirection;
  field: ResourceCostOrderField;
};

export enum ResourceCostOrderField {
  Amount = 'AMOUNT',
  EntityId = 'ENTITY_ID',
  Index = 'INDEX',
  ResourceType = 'RESOURCE_TYPE'
}

export type ResourceCostWhereInput = {
  amount?: InputMaybe<Scalars['u128']['input']>;
  amountEQ?: InputMaybe<Scalars['u128']['input']>;
  amountGT?: InputMaybe<Scalars['u128']['input']>;
  amountGTE?: InputMaybe<Scalars['u128']['input']>;
  amountLT?: InputMaybe<Scalars['u128']['input']>;
  amountLTE?: InputMaybe<Scalars['u128']['input']>;
  amountNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  index?: InputMaybe<Scalars['u32']['input']>;
  indexEQ?: InputMaybe<Scalars['u32']['input']>;
  indexGT?: InputMaybe<Scalars['u32']['input']>;
  indexGTE?: InputMaybe<Scalars['u32']['input']>;
  indexLT?: InputMaybe<Scalars['u32']['input']>;
  indexLTE?: InputMaybe<Scalars['u32']['input']>;
  indexNEQ?: InputMaybe<Scalars['u32']['input']>;
  resource_type?: InputMaybe<Scalars['u8']['input']>;
  resource_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type ResourceEdge = {
  __typename?: 'ResourceEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Resource>;
};

export type ResourceOrder = {
  direction: OrderDirection;
  field: ResourceOrderField;
};

export enum ResourceOrderField {
  Balance = 'BALANCE',
  EntityId = 'ENTITY_ID',
  ResourceType = 'RESOURCE_TYPE'
}

export type ResourceWhereInput = {
  balance?: InputMaybe<Scalars['u128']['input']>;
  balanceEQ?: InputMaybe<Scalars['u128']['input']>;
  balanceGT?: InputMaybe<Scalars['u128']['input']>;
  balanceGTE?: InputMaybe<Scalars['u128']['input']>;
  balanceLT?: InputMaybe<Scalars['u128']['input']>;
  balanceLTE?: InputMaybe<Scalars['u128']['input']>;
  balanceNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  resource_type?: InputMaybe<Scalars['u8']['input']>;
  resource_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Road = {
  __typename?: 'Road';
  end_coord_x?: Maybe<Scalars['u32']['output']>;
  end_coord_y?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  start_coord_x?: Maybe<Scalars['u32']['output']>;
  start_coord_y?: Maybe<Scalars['u32']['output']>;
  usage_count?: Maybe<Scalars['u32']['output']>;
};

export type RoadConfig = {
  __typename?: 'RoadConfig';
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  fee_amount?: Maybe<Scalars['u128']['output']>;
  fee_resource_type?: Maybe<Scalars['u8']['output']>;
  speed_up_by?: Maybe<Scalars['u64']['output']>;
};

export type RoadConfigConnection = {
  __typename?: 'RoadConfigConnection';
  edges?: Maybe<Array<Maybe<RoadConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type RoadConfigEdge = {
  __typename?: 'RoadConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<RoadConfig>;
};

export type RoadConfigOrder = {
  direction: OrderDirection;
  field: RoadConfigOrderField;
};

export enum RoadConfigOrderField {
  ConfigId = 'CONFIG_ID',
  FeeAmount = 'FEE_AMOUNT',
  FeeResourceType = 'FEE_RESOURCE_TYPE',
  SpeedUpBy = 'SPEED_UP_BY'
}

export type RoadConfigWhereInput = {
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  fee_amount?: InputMaybe<Scalars['u128']['input']>;
  fee_amountEQ?: InputMaybe<Scalars['u128']['input']>;
  fee_amountGT?: InputMaybe<Scalars['u128']['input']>;
  fee_amountGTE?: InputMaybe<Scalars['u128']['input']>;
  fee_amountLT?: InputMaybe<Scalars['u128']['input']>;
  fee_amountLTE?: InputMaybe<Scalars['u128']['input']>;
  fee_amountNEQ?: InputMaybe<Scalars['u128']['input']>;
  fee_resource_type?: InputMaybe<Scalars['u8']['input']>;
  fee_resource_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  fee_resource_typeGT?: InputMaybe<Scalars['u8']['input']>;
  fee_resource_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  fee_resource_typeLT?: InputMaybe<Scalars['u8']['input']>;
  fee_resource_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  fee_resource_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
  speed_up_by?: InputMaybe<Scalars['u64']['input']>;
  speed_up_byEQ?: InputMaybe<Scalars['u64']['input']>;
  speed_up_byGT?: InputMaybe<Scalars['u64']['input']>;
  speed_up_byGTE?: InputMaybe<Scalars['u64']['input']>;
  speed_up_byLT?: InputMaybe<Scalars['u64']['input']>;
  speed_up_byLTE?: InputMaybe<Scalars['u64']['input']>;
  speed_up_byNEQ?: InputMaybe<Scalars['u64']['input']>;
};

export type RoadConnection = {
  __typename?: 'RoadConnection';
  edges?: Maybe<Array<Maybe<RoadEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type RoadEdge = {
  __typename?: 'RoadEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Road>;
};

export type RoadOrder = {
  direction: OrderDirection;
  field: RoadOrderField;
};

export enum RoadOrderField {
  EndCoordX = 'END_COORD_X',
  EndCoordY = 'END_COORD_Y',
  StartCoordX = 'START_COORD_X',
  StartCoordY = 'START_COORD_Y',
  UsageCount = 'USAGE_COUNT'
}

export type RoadWhereInput = {
  end_coord_x?: InputMaybe<Scalars['u32']['input']>;
  end_coord_xEQ?: InputMaybe<Scalars['u32']['input']>;
  end_coord_xGT?: InputMaybe<Scalars['u32']['input']>;
  end_coord_xGTE?: InputMaybe<Scalars['u32']['input']>;
  end_coord_xLT?: InputMaybe<Scalars['u32']['input']>;
  end_coord_xLTE?: InputMaybe<Scalars['u32']['input']>;
  end_coord_xNEQ?: InputMaybe<Scalars['u32']['input']>;
  end_coord_y?: InputMaybe<Scalars['u32']['input']>;
  end_coord_yEQ?: InputMaybe<Scalars['u32']['input']>;
  end_coord_yGT?: InputMaybe<Scalars['u32']['input']>;
  end_coord_yGTE?: InputMaybe<Scalars['u32']['input']>;
  end_coord_yLT?: InputMaybe<Scalars['u32']['input']>;
  end_coord_yLTE?: InputMaybe<Scalars['u32']['input']>;
  end_coord_yNEQ?: InputMaybe<Scalars['u32']['input']>;
  start_coord_x?: InputMaybe<Scalars['u32']['input']>;
  start_coord_xEQ?: InputMaybe<Scalars['u32']['input']>;
  start_coord_xGT?: InputMaybe<Scalars['u32']['input']>;
  start_coord_xGTE?: InputMaybe<Scalars['u32']['input']>;
  start_coord_xLT?: InputMaybe<Scalars['u32']['input']>;
  start_coord_xLTE?: InputMaybe<Scalars['u32']['input']>;
  start_coord_xNEQ?: InputMaybe<Scalars['u32']['input']>;
  start_coord_y?: InputMaybe<Scalars['u32']['input']>;
  start_coord_yEQ?: InputMaybe<Scalars['u32']['input']>;
  start_coord_yGT?: InputMaybe<Scalars['u32']['input']>;
  start_coord_yGTE?: InputMaybe<Scalars['u32']['input']>;
  start_coord_yLT?: InputMaybe<Scalars['u32']['input']>;
  start_coord_yLTE?: InputMaybe<Scalars['u32']['input']>;
  start_coord_yNEQ?: InputMaybe<Scalars['u32']['input']>;
  usage_count?: InputMaybe<Scalars['u32']['input']>;
  usage_countEQ?: InputMaybe<Scalars['u32']['input']>;
  usage_countGT?: InputMaybe<Scalars['u32']['input']>;
  usage_countGTE?: InputMaybe<Scalars['u32']['input']>;
  usage_countLT?: InputMaybe<Scalars['u32']['input']>;
  usage_countLTE?: InputMaybe<Scalars['u32']['input']>;
  usage_countNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type SpeedConfig = {
  __typename?: 'SpeedConfig';
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_type?: Maybe<Scalars['u128']['output']>;
  sec_per_km?: Maybe<Scalars['u16']['output']>;
  speed_config_id?: Maybe<Scalars['u128']['output']>;
};

export type SpeedConfigConnection = {
  __typename?: 'SpeedConfigConnection';
  edges?: Maybe<Array<Maybe<SpeedConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SpeedConfigEdge = {
  __typename?: 'SpeedConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<SpeedConfig>;
};

export type SpeedConfigOrder = {
  direction: OrderDirection;
  field: SpeedConfigOrderField;
};

export enum SpeedConfigOrderField {
  ConfigId = 'CONFIG_ID',
  EntityType = 'ENTITY_TYPE',
  SecPerKm = 'SEC_PER_KM',
  SpeedConfigId = 'SPEED_CONFIG_ID'
}

export type SpeedConfigWhereInput = {
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_type?: InputMaybe<Scalars['u128']['input']>;
  entity_typeEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeNEQ?: InputMaybe<Scalars['u128']['input']>;
  sec_per_km?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmEQ?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmGT?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmGTE?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmLT?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmLTE?: InputMaybe<Scalars['u16']['input']>;
  sec_per_kmNEQ?: InputMaybe<Scalars['u16']['input']>;
  speed_config_id?: InputMaybe<Scalars['u128']['input']>;
  speed_config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  speed_config_idGT?: InputMaybe<Scalars['u128']['input']>;
  speed_config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  speed_config_idLT?: InputMaybe<Scalars['u128']['input']>;
  speed_config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  speed_config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Status = {
  __typename?: 'Status';
  entity?: Maybe<Entity>;
  trade_id?: Maybe<Scalars['u128']['output']>;
  value?: Maybe<Scalars['u128']['output']>;
};

export type StatusConnection = {
  __typename?: 'StatusConnection';
  edges?: Maybe<Array<Maybe<StatusEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type StatusEdge = {
  __typename?: 'StatusEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Status>;
};

export type StatusOrder = {
  direction: OrderDirection;
  field: StatusOrderField;
};

export enum StatusOrderField {
  TradeId = 'TRADE_ID',
  Value = 'VALUE'
}

export type StatusWhereInput = {
  trade_id?: InputMaybe<Scalars['u128']['input']>;
  trade_idEQ?: InputMaybe<Scalars['u128']['input']>;
  trade_idGT?: InputMaybe<Scalars['u128']['input']>;
  trade_idGTE?: InputMaybe<Scalars['u128']['input']>;
  trade_idLT?: InputMaybe<Scalars['u128']['input']>;
  trade_idLTE?: InputMaybe<Scalars['u128']['input']>;
  trade_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  value?: InputMaybe<Scalars['u128']['input']>;
  valueEQ?: InputMaybe<Scalars['u128']['input']>;
  valueGT?: InputMaybe<Scalars['u128']['input']>;
  valueGTE?: InputMaybe<Scalars['u128']['input']>;
  valueLT?: InputMaybe<Scalars['u128']['input']>;
  valueLTE?: InputMaybe<Scalars['u128']['input']>;
  valueNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  entityUpdated: Entity;
  modelRegistered: Model;
};


export type SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type System = {
  __typename?: 'System';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  system_id?: Maybe<Scalars['ID']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<System>;
};

export type Trade = {
  __typename?: 'Trade';
  claimed_by_maker?: Maybe<Scalars['bool']['output']>;
  claimed_by_taker?: Maybe<Scalars['bool']['output']>;
  entity?: Maybe<Entity>;
  expires_at?: Maybe<Scalars['u64']['output']>;
  maker_id?: Maybe<Scalars['u128']['output']>;
  maker_order_id?: Maybe<Scalars['u128']['output']>;
  taker_id?: Maybe<Scalars['u128']['output']>;
  taker_needs_caravan?: Maybe<Scalars['bool']['output']>;
  taker_order_id?: Maybe<Scalars['u128']['output']>;
  trade_id?: Maybe<Scalars['u128']['output']>;
};

export type TradeConnection = {
  __typename?: 'TradeConnection';
  edges?: Maybe<Array<Maybe<TradeEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type TradeEdge = {
  __typename?: 'TradeEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Trade>;
};

export type TradeOrder = {
  direction: OrderDirection;
  field: TradeOrderField;
};

export enum TradeOrderField {
  ClaimedByMaker = 'CLAIMED_BY_MAKER',
  ClaimedByTaker = 'CLAIMED_BY_TAKER',
  ExpiresAt = 'EXPIRES_AT',
  MakerId = 'MAKER_ID',
  MakerOrderId = 'MAKER_ORDER_ID',
  TakerId = 'TAKER_ID',
  TakerNeedsCaravan = 'TAKER_NEEDS_CARAVAN',
  TakerOrderId = 'TAKER_ORDER_ID',
  TradeId = 'TRADE_ID'
}

export type TradeWhereInput = {
  claimed_by_maker?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_makerEQ?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_makerGT?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_makerGTE?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_makerLT?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_makerLTE?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_makerNEQ?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_taker?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_takerEQ?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_takerGT?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_takerGTE?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_takerLT?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_takerLTE?: InputMaybe<Scalars['bool']['input']>;
  claimed_by_takerNEQ?: InputMaybe<Scalars['bool']['input']>;
  expires_at?: InputMaybe<Scalars['u64']['input']>;
  expires_atEQ?: InputMaybe<Scalars['u64']['input']>;
  expires_atGT?: InputMaybe<Scalars['u64']['input']>;
  expires_atGTE?: InputMaybe<Scalars['u64']['input']>;
  expires_atLT?: InputMaybe<Scalars['u64']['input']>;
  expires_atLTE?: InputMaybe<Scalars['u64']['input']>;
  expires_atNEQ?: InputMaybe<Scalars['u64']['input']>;
  maker_id?: InputMaybe<Scalars['u128']['input']>;
  maker_idEQ?: InputMaybe<Scalars['u128']['input']>;
  maker_idGT?: InputMaybe<Scalars['u128']['input']>;
  maker_idGTE?: InputMaybe<Scalars['u128']['input']>;
  maker_idLT?: InputMaybe<Scalars['u128']['input']>;
  maker_idLTE?: InputMaybe<Scalars['u128']['input']>;
  maker_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  maker_order_id?: InputMaybe<Scalars['u128']['input']>;
  maker_order_idEQ?: InputMaybe<Scalars['u128']['input']>;
  maker_order_idGT?: InputMaybe<Scalars['u128']['input']>;
  maker_order_idGTE?: InputMaybe<Scalars['u128']['input']>;
  maker_order_idLT?: InputMaybe<Scalars['u128']['input']>;
  maker_order_idLTE?: InputMaybe<Scalars['u128']['input']>;
  maker_order_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  taker_id?: InputMaybe<Scalars['u128']['input']>;
  taker_idEQ?: InputMaybe<Scalars['u128']['input']>;
  taker_idGT?: InputMaybe<Scalars['u128']['input']>;
  taker_idGTE?: InputMaybe<Scalars['u128']['input']>;
  taker_idLT?: InputMaybe<Scalars['u128']['input']>;
  taker_idLTE?: InputMaybe<Scalars['u128']['input']>;
  taker_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  taker_needs_caravan?: InputMaybe<Scalars['bool']['input']>;
  taker_needs_caravanEQ?: InputMaybe<Scalars['bool']['input']>;
  taker_needs_caravanGT?: InputMaybe<Scalars['bool']['input']>;
  taker_needs_caravanGTE?: InputMaybe<Scalars['bool']['input']>;
  taker_needs_caravanLT?: InputMaybe<Scalars['bool']['input']>;
  taker_needs_caravanLTE?: InputMaybe<Scalars['bool']['input']>;
  taker_needs_caravanNEQ?: InputMaybe<Scalars['bool']['input']>;
  taker_order_id?: InputMaybe<Scalars['u128']['input']>;
  taker_order_idEQ?: InputMaybe<Scalars['u128']['input']>;
  taker_order_idGT?: InputMaybe<Scalars['u128']['input']>;
  taker_order_idGTE?: InputMaybe<Scalars['u128']['input']>;
  taker_order_idLT?: InputMaybe<Scalars['u128']['input']>;
  taker_order_idLTE?: InputMaybe<Scalars['u128']['input']>;
  taker_order_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  trade_id?: InputMaybe<Scalars['u128']['input']>;
  trade_idEQ?: InputMaybe<Scalars['u128']['input']>;
  trade_idGT?: InputMaybe<Scalars['u128']['input']>;
  trade_idGTE?: InputMaybe<Scalars['u128']['input']>;
  trade_idLT?: InputMaybe<Scalars['u128']['input']>;
  trade_idLTE?: InputMaybe<Scalars['u128']['input']>;
  trade_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type TravelConfig = {
  __typename?: 'TravelConfig';
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  free_transport_per_city?: Maybe<Scalars['u128']['output']>;
};

export type TravelConfigConnection = {
  __typename?: 'TravelConfigConnection';
  edges?: Maybe<Array<Maybe<TravelConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type TravelConfigEdge = {
  __typename?: 'TravelConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<TravelConfig>;
};

export type TravelConfigOrder = {
  direction: OrderDirection;
  field: TravelConfigOrderField;
};

export enum TravelConfigOrderField {
  ConfigId = 'CONFIG_ID',
  FreeTransportPerCity = 'FREE_TRANSPORT_PER_CITY'
}

export type TravelConfigWhereInput = {
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_city?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_cityEQ?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_cityGT?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_cityGTE?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_cityLT?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_cityLTE?: InputMaybe<Scalars['u128']['input']>;
  free_transport_per_cityNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Vault = {
  __typename?: 'Vault';
  balance?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  resource_type?: Maybe<Scalars['u8']['output']>;
};

export type VaultConnection = {
  __typename?: 'VaultConnection';
  edges?: Maybe<Array<Maybe<VaultEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type VaultEdge = {
  __typename?: 'VaultEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Vault>;
};

export type VaultOrder = {
  direction: OrderDirection;
  field: VaultOrderField;
};

export enum VaultOrderField {
  Balance = 'BALANCE',
  EntityId = 'ENTITY_ID',
  ResourceType = 'RESOURCE_TYPE'
}

export type VaultWhereInput = {
  balance?: InputMaybe<Scalars['u128']['input']>;
  balanceEQ?: InputMaybe<Scalars['u128']['input']>;
  balanceGT?: InputMaybe<Scalars['u128']['input']>;
  balanceGTE?: InputMaybe<Scalars['u128']['input']>;
  balanceLT?: InputMaybe<Scalars['u128']['input']>;
  balanceLTE?: InputMaybe<Scalars['u128']['input']>;
  balanceNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  resource_type?: InputMaybe<Scalars['u8']['input']>;
  resource_typeEQ?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeGTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLT?: InputMaybe<Scalars['u8']['input']>;
  resource_typeLTE?: InputMaybe<Scalars['u8']['input']>;
  resource_typeNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type WeightConfig = {
  __typename?: 'WeightConfig';
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_type?: Maybe<Scalars['u128']['output']>;
  weight_config_id?: Maybe<Scalars['u128']['output']>;
  weight_gram?: Maybe<Scalars['u128']['output']>;
};

export type WeightConfigConnection = {
  __typename?: 'WeightConfigConnection';
  edges?: Maybe<Array<Maybe<WeightConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type WeightConfigEdge = {
  __typename?: 'WeightConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<WeightConfig>;
};

export type WeightConfigOrder = {
  direction: OrderDirection;
  field: WeightConfigOrderField;
};

export enum WeightConfigOrderField {
  ConfigId = 'CONFIG_ID',
  EntityType = 'ENTITY_TYPE',
  WeightConfigId = 'WEIGHT_CONFIG_ID',
  WeightGram = 'WEIGHT_GRAM'
}

export type WeightConfigWhereInput = {
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_type?: InputMaybe<Scalars['u128']['input']>;
  entity_typeEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLT?: InputMaybe<Scalars['u128']['input']>;
  entity_typeLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_typeNEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_config_id?: InputMaybe<Scalars['u128']['input']>;
  weight_config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_config_idGT?: InputMaybe<Scalars['u128']['input']>;
  weight_config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  weight_config_idLT?: InputMaybe<Scalars['u128']['input']>;
  weight_config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  weight_config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_gram?: InputMaybe<Scalars['u128']['input']>;
  weight_gramEQ?: InputMaybe<Scalars['u128']['input']>;
  weight_gramGT?: InputMaybe<Scalars['u128']['input']>;
  weight_gramGTE?: InputMaybe<Scalars['u128']['input']>;
  weight_gramLT?: InputMaybe<Scalars['u128']['input']>;
  weight_gramLTE?: InputMaybe<Scalars['u128']['input']>;
  weight_gramNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type WorldConfig = {
  __typename?: 'WorldConfig';
  config_id?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  realm_l2_contract?: Maybe<Scalars['ContractAddress']['output']>;
};

export type WorldConfigConnection = {
  __typename?: 'WorldConfigConnection';
  edges?: Maybe<Array<Maybe<WorldConfigEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type WorldConfigEdge = {
  __typename?: 'WorldConfigEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<WorldConfig>;
};

export type WorldConfigOrder = {
  direction: OrderDirection;
  field: WorldConfigOrderField;
};

export enum WorldConfigOrderField {
  ConfigId = 'CONFIG_ID',
  RealmL2Contract = 'REALM_L2_CONTRACT'
}

export type WorldConfigWhereInput = {
  config_id?: InputMaybe<Scalars['u128']['input']>;
  config_idEQ?: InputMaybe<Scalars['u128']['input']>;
  config_idGT?: InputMaybe<Scalars['u128']['input']>;
  config_idGTE?: InputMaybe<Scalars['u128']['input']>;
  config_idLT?: InputMaybe<Scalars['u128']['input']>;
  config_idLTE?: InputMaybe<Scalars['u128']['input']>;
  config_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  realm_l2_contract?: InputMaybe<Scalars['ContractAddress']['input']>;
  realm_l2_contractEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  realm_l2_contractGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  realm_l2_contractGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  realm_l2_contractLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  realm_l2_contractLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  realm_l2_contractNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type GetCcMapQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCcMapQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Age' } | { __typename: 'ArrivalTime' } | { __typename: 'BuildingConfig' } | { __typename: 'BuildingCost' } | { __typename: 'BuildingTypeConfig' } | { __typename: 'Capacity' } | { __typename: 'CapacityConfig' } | { __typename: 'Caravan' } | { __typename: 'CaravanMembers' } | { __typename: 'EntityMetadata' } | { __typename: 'ForeignKey' } | { __typename: 'FungibleEntities' } | { __typename: 'HomePosition' } | { __typename: 'HyperStructure' } | { __typename: 'Labor' } | { __typename: 'LaborAuction' } | { __typename: 'LaborConfig' } | { __typename: 'LaborCostAmount' } | { __typename: 'LaborCostResources' } | { __typename: 'Map', token_id?: any | null, size?: any | null, environment?: any | null, structure?: any | null, legendary?: any | null, layout1?: any | null, layout2?: any | null, layout3?: any | null, doors1?: any | null, doors2?: any | null, doors3?: any | null, points1?: any | null, points2?: any | null, points3?: any | null, affinity?: any | null, dungeon_name1?: any | null, dungeon_name2?: any | null, dungeon_name3?: any | null, dungeon_name4?: any | null, dungeon_name5?: any | null, owner?: any | null } | { __typename: 'Movable' } | { __typename: 'OrderId' } | { __typename: 'OrderResource' } | { __typename: 'Owner' } | { __typename: 'Position' } | { __typename: 'Quantity' } | { __typename: 'QuantityTracker' } | { __typename: 'Realm' } | { __typename: 'Resource' } | { __typename: 'ResourceCost' } | { __typename: 'Road' } | { __typename: 'RoadConfig' } | { __typename: 'SpeedConfig' } | { __typename: 'Status' } | { __typename: 'Trade' } | { __typename: 'TravelConfig' } | { __typename: 'Vault' } | { __typename: 'WeightConfig' } | { __typename: 'WorldConfig' } | null> | null } | null } | null> | null } | null };


export const GetCcMapDocument = gql`
    query getCCMap {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Map {
            token_id
            size
            environment
            structure
            legendary
            layout1
            layout2
            layout3
            doors1
            doors2
            doors3
            points1
            points2
            points3
            affinity
            dungeon_name1
            dungeon_name2
            dungeon_name3
            dungeon_name4
            dungeon_name5
            owner
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetCcMapDocumentString = print(GetCcMapDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCCMap(variables?: GetCcMapQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetCcMapQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCcMapQuery>(GetCcMapDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCCMap', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;