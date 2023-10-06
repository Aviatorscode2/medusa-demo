export default async function () {
  const imports = (await import(
"@medusajs/medusa/dist/api/routes/admin/products/index"
  )) as any;
  imports.defaultAdminProductFields = [
   ...imports.defaultAdminProductFields,
    "units_sold_q1",
    "units_sold_q2",
    "units_sold_q3",
    "units_sold_q4"
  ];
}