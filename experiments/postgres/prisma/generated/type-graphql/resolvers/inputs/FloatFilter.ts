import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedFloatFilter } from "../inputs/NestedFloatFilter";

@TypeGraphQL.InputType("FloatFilter", {
  isAbstract: true
})
export class FloatFilter {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  equals?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lte?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  gt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  gte?: number | undefined;

  @TypeGraphQL.Field(_type => NestedFloatFilter, {
    nullable: true
  })
  not?: NestedFloatFilter | undefined;
}
