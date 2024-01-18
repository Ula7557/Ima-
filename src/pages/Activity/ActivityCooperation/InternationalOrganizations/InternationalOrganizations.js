import React from 'react';
import classes from './InternationalOrganizations.module.scss';
import InternationalOrganizationsCard from '../../../../components/InternationalOrganizationsCard';

// images
import Wipo from '../../../../assets/images/Wipo.png';
import Europe from '../../../../assets/images/EP.png';
import EAsia from '../../../../assets/images/easia.png'
import Euipo from '../../../../assets/images/euipo.png';

function InternationalOrganizations() {
  return (
    <div className={` ${classes.international__organizations} load-anim`}>

      <InternationalOrganizationsCard
        img={Wipo}
        text="Всемирная организация интеллектуальной собственности"
        link="www.wipo.int"
      />

      <InternationalOrganizationsCard
        img={Europe}
        text="Европейская патентная Организация"
        link="www.epo.org"
      />

      <InternationalOrganizationsCard
        img={EAsia}
        text="Евразийская Патентная Организация"
        link="www.eapo.org"
      />

      <InternationalOrganizationsCard
        img={Euipo}
        text="Ведомство по интеллектуальной собственности Европейского Союза "
        link="www.euipo.europa.eu"
      />
    </div>
  );
}

export default InternationalOrganizations;
