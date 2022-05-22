import React from "react";
import CardCatalogues from "src/components/catalogues/card-catalogues";
import AppBarComponent from "src/components/widgets/app-bar-component";

const Catalogues = () => {
  return (
    <AppBarComponent>
      <CardCatalogues />
    </AppBarComponent>
  );
};

export default Catalogues;
