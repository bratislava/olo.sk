/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import configSync from "strapi-plugin-config-sync/strapi-admin";
import meilisearch from "strapi-plugin-meilisearch/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import wysiwyg from "../../src/plugins/wysiwyg/strapi-admin";
import wasteCollectionDaysImport from "../../src/plugins/waste-collection-days-import/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.tsx";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    "color-picker": colorPicker,
    graphql: graphql,
    i18n: i18N,
    seo: seo,
    "users-permissions": usersPermissions,
    "config-sync": configSync,
    meilisearch: meilisearch,
    "multi-select": multiSelect,
    wysiwyg: wysiwyg,
    "waste-collection-days-import": wasteCollectionDaysImport,
  },
});
