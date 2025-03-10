import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MainUserUpdatealiasesInput } from "../inputs/MainUserUpdatealiasesInput";
import { MainUserUpdategradesInput } from "../inputs/MainUserUpdategradesInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { PostUpdateManyWithoutEditorNestedInput } from "../inputs/PostUpdateManyWithoutEditorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MainUserUpdateInput", {
  isAbstract: true
})
export class MainUserUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: IntFieldUpdateOperationsInput | undefined;

  balance?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: FloatFieldUpdateOperationsInput | undefined;

  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutEditorNestedInput, {
    nullable: true
  })
  editorPosts?: PostUpdateManyWithoutEditorNestedInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdategradesInput, {
    nullable: true
  })
  grades?: MainUserUpdategradesInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdatealiasesInput, {
    nullable: true
  })
  aliases?: MainUserUpdatealiasesInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: NullableStringFieldUpdateOperationsInput | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatFieldUpdateOperationsInput | undefined) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostUpdateManyWithoutAuthorNestedInput | undefined) {
    this.posts = posts;
  }
}
