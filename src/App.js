/* eslint-disable no-undef */
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// main style
import "./assets/styles/main.scss";

// container
import Header from "./containers/Header/Header";
import VideoHolder from "./containers/VideoHolder/VideoHolder";
import Helmet from "react-helmet";

//pages
import Home from "./pages/Home/Home";
// Agency ---------------------------------
import Agency from "./pages/Agency/Agency";
import AgencyAbout from "./pages/Agency/AgencyAbout/AgencyAbout";
import Collegiom from "./pages/Agency/Collegium/Collegiom";
import AgencyDepartment from "./pages/Agency/AgencyDepartment";
import AgencyOrganizations from "./pages/Agency/AgencyOrganizations/AgencyOrganizations";
import AppealAgency from "./pages/Agency/AppealAgency";
import AgencyStructure from "./pages/Agency/AgencyStructure";
import AgencyTechnical from "./pages/Agency/AgencyTechnical/AgencyTechnical";
import AgencyGuide from "./pages/Agency/AgencyGuide";
import PublicCouncil from "./pages/Agency/PublicCouncil/PublicCouncil";
import AwardedEmployees from "./pages/Agency/AwardedEmployees";
import VacancyAgency from "./pages/Agency/VacancyAgency";
import RequisiteAgency from "./pages/Agency/RequisiteAgency/RequisiteAgency";
import PatentFund from "./pages/Agency/PatentFund/PatentFund";
import ContactPage from "./pages/Agency/ContactPage/ContactPage";
import SideBar from "./components/SideBar/SideBar";

// Activity
import Activity from "./pages/Activity";
import ActivityIntellectual from "./pages/Activity/ActivityIntellectual";
import ActivityCooperation from "./pages/Activity/ActivityCooperation/ActivityCooperation";
import InternationalOrganizations from "./pages/Activity/ActivityCooperation/InternationalOrganizations/InternationalOrganizations";
import About from "./pages/Activity/ActivityCooperation/About/About";
import InternationalRegulations from "./pages/Activity/ActivityCooperation/InternationalRegulations/InternationalRegulations";

import ActivityPatent from "./pages/Activity/ActivityPatent";
import ActivityArbitrage from "./pages/Activity/ActivityArbitrage";
import ActivityCorruptionMessage from "./pages/Activity/ActivityCorruption/ActivityCorruptionMessage/ActivityCorruptionMessage";
import ActivityCorruptionRegulations from "./pages/Activity/ActivityCorruption/ActivityCorruptionRegulations/ActivityCorruptionRegulations";
import ActivityCorruptionProivide from "./pages/Activity/ActivityCorruption/ActivityCorruptionProivide/ActivityCorruptionProivide";
import ServicesInventionsApplication from './pages/Services/ServicesInventions/ServicesInventions'
import ActivityTenders from "./pages/Activity/ActivityTenders/ActivityTenders";
import OpenData from "./pages/Activity/OpenData/OpenData";
import Arbitraj from "./pages/Activity/Arbitraj/Arbitraj";
import Accreditation from "./pages/Activity/Arbitraj/Accreditation/Accreditation";
import ActivityCorruption from "./pages/Activity/ActivityCorruption/ActivityCorruption";
import ActivityLicensing from "./pages/Activity/ActivityLicensing/ActivityLicensing";
import ActivityGoverement from "./pages/Activity/ActivityGoverement/ActivityGoverement";
import ActivityAppeal from "./pages/Activity/ActivityAppeal";
import ActivityStatistics from "./pages/Activity/ActivityStatistics";
import ActivityUniversities from "./pages/Activity/ActivityUniversities";

// Services
import Services from "./pages/Services";
import ServicesPublic from "./pages/Services/ServicesPublic";
import ServicesInteractive from "./pages/Services/ServicesInteractive";
import ServicesInventions from "./pages/Services/ServicesInventions/ServicesInventions";
import UtilityModels from "./pages/Services/UtilityModels";
import ServisePrograms from "./pages/Services/ServicesPrograms";
import ServiseMarks from "./pages/Services/ServiseMarks";
import ServicesTopologies from "./pages/Services/ServicesTopologies";
import ServicesAppellations from "./pages/Services/ServicesAppellations";
import IndustrialDesign from "./pages/Services/IndustrialDesign/IndustrialDesign";
import BreedingAchievements from "./pages/Services/BreedingAchievements/BreedingAchievements";
import PatentRegisteration from "./pages/Services/PatentRegisteration/PatentRegisteration";
// import Attestation from "./pages/Services/Attestation/Attestation";
import PatentAttestation from "./pages/Services/PatentAttestation/PatentAttestation";
import QuestionAnswer from "./pages/Agency/QuestionAnswer/QuestionAnswer";
import UtilityModelsApplication from "./pages/Services/UtilityModels/UtilityModelsApplication";
import UtilityModelsScheme from "./pages/Services/UtilityModels/UtilityModelsScheme";
import UtilityModelsRules from "./pages/Services/UtilityModels/UtilityModelsRules/UtilityModelsRules";
import UtilityModelsSigns from "./pages/Services/UtilityModels/UtilityModelsSigns/UtilityModelsSigns";
import UtilityModelDocumet from "./pages/Services/UtilityModels/UtilityModelDocumet";

import ServicesTopologiesSigns from "./pages/Services/ServicesTopologies/ServicesTopologiesSigns/ServicesTopologiesSigns";
import ServicesTopologiesApplication from "./pages/Services/ServicesTopologies/ServicesTopologiesApplication";
import ServicesTopologiesDocumet from "./pages/Services/ServicesTopologies/ServicesTopologiesDocumet";
import ServicesTopologiesRules from "./pages/Services/ServicesTopologies/ServicesTopologiesRules";
import ServicesTopologiesScheme from "./pages/Services/ServicesTopologies/ServicesTopologiesScheme";

import ServiseMarksApplication from "./pages/Services/ServiseMarks/ServiseMarksApplication/ServiseMarksApplication";
import ServiseMarksDocumet from "./pages/Services/ServiseMarks/ServiseMarksDocumet";
import ServiseMarksRules from "./pages/Services/ServiseMarks/ServiseMarksRules";
import ServiseMarksScheme from "./pages/Services/ServiseMarks/ServiseMarksScheme";
import ServiseMarksSigns from "./pages/Services/ServiseMarks/ServiseMarksSigns";

import ServicesProgramsApplication from "./pages/Services/ServicesPrograms/ServicesProgramsApplication";
import ServicesProgramsDocumet from "./pages/Services/ServicesPrograms/ServicesProgramsDocumet";
import ServicesProgramsRules from "./pages/Services/ServicesPrograms/ServicesProgramsRules";
import ServicesProgramsScheme from "./pages/Services/ServicesPrograms/ServicesProgramsScheme";
import ServicesProgramsSigns from "./pages/Services/ServicesPrograms/ServicesProgramsSigns";

import ServicesInventionsDocumet from "./pages/Services/ServicesInventions/ServicesInventionsDocumet";
import ServicesInventionsRules from "./pages/Services/ServicesInventions/ServicesInventionsRules";
import ServicesInventionsSigns from "./pages/Services/ServicesInventions/ServicesInventionsSigns";
import ServicesInventionsScheme from "./pages/Services/ServicesInventions/ServicesInventionsScheme";
import ServicesInventionsInterApp from "./pages/Services/ServicesInventions/ServicesInventionsInterApp";

import ServicesAppellationsApplication from "./pages/Services/ServicesAppellations/ServicesAppellationsApplication";
import ServicesAppellationsDocumet from "./pages/Services/ServicesAppellations/ServicesAppellationsDocumet";
import ServicesAppellationsRules from "./pages/Services/ServicesAppellations/ServicesAppellationsRules";
import ServicesAppellationsScheme from "./pages/Services/ServicesAppellations/ServicesAppellationsScheme";
import ServicesAppellationsSigns from "./pages/Services/ServicesAppellations/ServicesAppellationsSigns";

import PatentRegisterationApplication from "./pages/Services/PatentRegisteration/PatentRegisterationApplication";
import PatentRegisterationDocumet from "./pages/Services/PatentRegisteration/PatentRegisterationDocumet";
import PatentRegisterationRules from "./pages/Services/PatentRegisteration/PatentRegisterationRules";
import PatentRegisterationScheme from "./pages/Services/PatentRegisteration/PatentRegisterationScheme";
import PatentRegisterationSigns from "./pages/Services/PatentRegisteration/PatentRegisterationSigns";

import PatentAttestationApplication from "./pages/Services/PatentAttestation/PatentAttestationApplication";
import PatentAttestationDocumet from "./pages/Services/PatentAttestation/PatentAttestationDocumet";
import PatentAttestationRules from "./pages/Services/PatentAttestation/PatentAttestationRules";
import PatentAttestationScheme from "./pages/Services/PatentAttestation/PatentAttestationScheme";
import PatentAttestationSigns from "./pages/Services/PatentAttestation/PatentAttestationSigns";

import IndustrialDesignApplication from "./pages/Services/IndustrialDesign/IndustrialDesignApplication";
import IndustrialDesignDocumet from "./pages/Services/IndustrialDesign/IndustrialDesignDocumet";
import IndustrialDesignRules from "./pages/Services/IndustrialDesign/IndustrialDesignRules";
import IndustrialDesignScheme from "./pages/Services/IndustrialDesign/IndustrialDesignScheme";
import IndustrialDesignSigns from "./pages/Services/IndustrialDesign/IndustrialDesignSigns";

import BreedingAchievementsApplication from "./pages/Services/BreedingAchievements/BreedingAchievementsApplication";
import BreedingAchievementsDocumet from "./pages/Services/BreedingAchievements/BreedingAchievementsDocumet";
import BreedingAchievementsRules from "./pages/Services/BreedingAchievements/BreedingAchievementsRules";
import BreedingAchievementsScheme from "./pages/Services/BreedingAchievements/BreedingAchievementsScheme";
import BreedingAchievementsSigns from "./pages/Services/BreedingAchievements/BreedingAchievementsSigns";

// Regulations
import Regulations from "./pages/Regulations/Regulations";
import RegulationsInternational from "./pages/Regulations/RegulationsInternational";
import InternationalConventions from "./pages/Regulations/RegulationsInternational/InternationalConventions";
import IntergovernmentalAagreements from "./pages/Regulations/RegulationsInternational/IntergovernmentalAagreements";

//information Servise
import InformationService from "./pages/InformationService";
import InformationServiseProtocols from "./pages/InformationService/InformationServiseProtocols";
import InformationServiseContests from "./pages/InformationService/InformationServiseContests";
import Tenders from "./pages/InformationService/InformationServiseContests/Tenders";
import InformationServiseMedia from "./pages/InformationService/InformationServiseMedia";
import InformationServiseReleases from "./pages/InformationService/InformationServiseReleases";
import InformationServiseLibrary from "./pages/InformationService/InformationServiseLibrary";
import PhotoPart from "./pages/InformationService/InformationServiseLibrary/PhotoPart";
import VideoPart from "./pages/InformationService/InformationServiseLibrary/VideoPart";
import PhotoDetail from "./pages/InformationService/InformationServiseLibrary/PhotoDetail";
import InformationServiseEditions from "./pages/InformationService/InformationServiseEditions";
import Reports from "./pages/InformationService/InformationServiseEditions/Reportes";
import Indexes from "./pages/InformationService/InformationServiseEditions/Indexes";

import LawsUzb from "./pages/Regulations/LawsUzb";
import DecressUzb from "./pages/Regulations/DecressUzb/DecressUzb";
import CabinetMinisters from "./pages/Regulations/CabinetMinisters";
import IndustryRegulations from "./pages/Regulations/IndustryRegulations";
import Documents from "./pages/Regulations/Documents/Documents";
import Duties from "./pages/Regulations/Duties";
import Projects from "./pages/Regulations/Projects";
// News
import News from "./pages/News";
import MainNews from "./pages/News/MainNews";
import SingleNews from "./pages/News/SingleNews";
import PressRelease from "./pages/News/PressRelease";
import Events from "./pages/News/Events";
import Ad from "./pages/News/Ad";
import SingleAd from "./pages/News/SingleAd";
import { useEffect } from "react";
import Application from "./components/Application/Application";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [loading, title, error] = useFetch(
    "/system/settings/one?key=site_name"
  );
  const [brandLoader, brand] = useFetch("/system/settings/one?key=brand_name");
  const [iconLoader, favicon] = useFetch(
    "/system/settings/one?key=site_favicon"
  );
  // console.groupCollapsed("errors");
  const states = useSelector((state) => state);
  // useEffect(() => {
  //   document.addEventListener("selectionchange", () => {
  //     responsiveVoice.enableEstimationTimeout = false;
  //     if (responsiveVoice.voiceSupport()) {
  //       responsiveVoice.speak(document.getSelection().toString());
  //       return responsiveVoice.cancel();
  //     } else {
  //       return "";
  //     }
  //   });
  //   setTimeout(() => {
  //     console.groupEnd("errors");
  //   }, 5000);
  // }, []);

  return (
    <div
      className={`App ${
        states?.videoState?.state || states.HamburgerState?.state
          ? "overflow"
          : ""
      }`}
    >
      <Helmet>
        (
        <title>
          {`${!loading && title?.data?.settings_value} -
          ${!brandLoader && brand?.data?.settings_value}`}
        </title>
        )
        <link rel="icon" href={!iconLoader && favicon?.data?.settings_value} />
      </Helmet>

      <Header />
      <VideoHolder />
      <SideBar />
      <Routes>
        <Route element={<Home />} path="/" />
        {/* ------------------------------- */}
        <Route element={<Agency />} path="/agency" />
        <Route element={<AgencyAbout />} path="/about-agency" />
        <Route element={<Collegiom />} path="/collegue-agency" />
        <Route element={<AgencyDepartment />} path="/departments-agency" />
        <Route element={<AgencyStructure />} path="/structura-agency" />
        <Route element={<AgencyGuide />} path="/guide-agency" />
        <Route element={<AgencyTechnical />} path="/technical-agency" />
        <Route element={<AgencyOrganizations />} path="/organizations-agency" />
        <Route element={<AppealAgency />} path="/appeal-agency" />
        <Route element={<PublicCouncil />} path="/public-council" />
        <Route element={<ContactPage />} path="/contact-agency" />
        <Route element={<AwardedEmployees />} path="/awards-agency" />
        <Route element={<VacancyAgency />} path="/vacany-agency" />
        <Route element={<RequisiteAgency />} path="/requisite-agency" />
        <Route element={<PatentFund />} path="/patent-fund" />
        <Route element={<Activity />} path="/activity" />
        <Route
          element={<ActivityIntellectual />}
          path="/activity-intellectual"
        />
        <Route path="/activity-cooperation" element={<ActivityCooperation />}>
          <Route path="about" element={<About />} />
          <Route
            path="international-organizations"
            element={<InternationalOrganizations />}
          />
          <Route
            path="international-regulations"
            element={<InternationalRegulations />}
          />
        </Route>
        <Route element={<ActivityCooperation />} path="/activity-cooperation" />
        <Route element={<ActivityPatent />} path="/activity-patent" />
        <Route element={<OpenData />} path="/open-data" />
        <Route element={<Arbitraj />} path="/activity-arbitration" />
        <Route element={<Accreditation />} path="/activity-arbitration/:id" />
        <Route element={<ActivityArbitrage />} path="/activity-arbitrage" />
        <Route element={<OpenData />} path="/activity-open-data" />

        <Route path="/activity-corruption" element={<ActivityCorruption />}>
          <Route path="message" element={<ActivityCorruptionMessage />} />
          <Route
            path="regulations"
            element={<ActivityCorruptionRegulations />}
          ></Route>
          <Route path="provide" element={<ActivityCorruptionProivide />} />
        </Route>

        <Route path="/activity-tenders" element={<ActivityTenders />} />
        <Route path="/activity-analytics" element={<ActivityStatistics />} />
        <Route path="/activity-licensing" element={<ActivityLicensing />} />
        <Route path="/activity-e-government" element={<ActivityGoverement />} />
        <Route path="/activity-appeal" element={<ActivityAppeal />} />
        <Route
          path="/activity-universities"
          element={<ActivityUniversities />}
        />
        {/* ----------------------------------------------------------------- */}
        <Route path="/question-answer" element={<QuestionAnswer />} />

        <Route path="/services" element={<Services />}>
          <Route path="public" element={<ServicesPublic />} />
          <Route path="interactive" element={<ServicesInteractive />} />
        </Route>
        <Route path="/service/:id" element={<ServicesInventions />} > 
           <Route path="inventions-application" element={<ServicesInventionsApplication />} />
           <Route path="inventions-scheme" element={<ServicesInventionsScheme />} />
           <Route path="inventions-rules" element={<ServicesInventionsRules />} />
           <Route path="inventions-pass" element={<ServicesInventionsSigns />} />
           <Route path="inventions-documents" element={<ServicesInventionsDocumet />} />
           <Route path="inventions-interApp" element={<ServicesInventionsInterApp/>} />
        </Route>
        <Route path="/service-marks" element={<ServiseMarks />}>
          <Route
            path="servicemarks-application"
            element={<ServiseMarksApplication />}
          />
          <Route path="servicemarks-scheme" element={<ServiseMarksScheme />} />
          <Route path="servicemarks-rules" element={<ServiseMarksRules />} />
          <Route path="servicemarks-pass" element={<ServiseMarksSigns />} />
          <Route
            path="servicemarks-documents"
            element={<ServiseMarksDocumet />}
          />
        </Route>
        <Route path="/utility-models" element={<UtilityModels />}>
          <Route
            path="utilitymodels-application"
            element={<UtilityModelsApplication />}
          />
          <Route path="Service-scheme" element={<UtilityModelsScheme />} />
          <Route path="General-rules" element={<UtilityModelsRules />} />
          <Route path="Signs-pass" element={<UtilityModelsSigns />} />
          <Route path="documents" element={<UtilityModelDocumet />} />
        </Route>
        <Route path="/services-topologies" element={<ServicesTopologies />}>
          <Route
            path="services-topologies-application"
            element={<ServicesTopologiesApplication />}
          />
          <Route
            path="services-topologies-scheme"
            element={<ServicesTopologiesScheme />}
          />
          <Route
            path="services-topologies-rules"
            element={<ServicesTopologiesRules />}
          />
          <Route
            path="services-topologies-pass"
            element={<ServicesTopologiesSigns />}
          />
          <Route
            path="services-topologies-documents"
            element={<ServicesTopologiesDocumet />}
          />
        </Route>
        <Route path="/services-design" element={<IndustrialDesign />}>
          <Route
            path="services-design-application"
            element={<IndustrialDesignApplication />}
          />
          <Route
            path="services-design-scheme"
            element={<IndustrialDesignScheme />}
          />
          <Route
            path="services-design-rules"
            element={<IndustrialDesignRules />}
          />
          <Route
            path="services-design-pass"
            element={<IndustrialDesignSigns />}
          />
          <Route
            path="services-design-documents"
            element={<IndustrialDesignDocumet />}
          />
        </Route>
        <Route path="/services-breeding" element={<BreedingAchievements />}>
          <Route
            path="services-breeding-application"
            element={<BreedingAchievementsApplication />}
          />
          <Route
            path="services-breeding-scheme"
            element={<BreedingAchievementsScheme />}
          />
          <Route
            path="services-breeding-rules"
            element={<BreedingAchievementsRules />}
          />
          <Route
            path="services-breeding-pass"
            element={<BreedingAchievementsSigns />}
          />
          <Route
            path="services-breeding-documents"
            element={<BreedingAchievementsDocumet />}
          />
        </Route>
        <Route path="/patent-registeration" element={<PatentRegisteration />}>
          <Route
            path="patent-registeration-application"
            element={<PatentRegisterationApplication />}
          />
          <Route
            path="patent-registeration-scheme"
            element={<PatentRegisterationScheme />}
          />
          <Route
            path="patent-registeration-rules"
            element={<PatentRegisterationRules />}
          />
          <Route
            path="patent-registeration-pass"
            element={<PatentRegisterationSigns />}
          />
          <Route
            path="patent-registeration-documents"
            element={<PatentRegisterationDocumet />}
          />
        </Route>
        <Route path="/patent-attestation" element={<PatentAttestation />}>
          <Route
            path="patent-attestation-application"
            element={<PatentAttestationApplication />}
          />
          <Route
            path="patent-attestation-scheme"
            element={<PatentAttestationScheme />}
          />
          <Route
            path="patent-attestation-rules"
            element={<PatentAttestationRules />}
          />
          <Route
            path="patent-attestation-pass"
            element={<PatentAttestationSigns />}
          />
          <Route
            path="patent-attestation-documents"
            element={<PatentAttestationDocumet />}
          />
        </Route>
        <Route path="/services-appellations" element={<ServicesAppellations />}>
          <Route
            path="services-appellations-application"
            element={<ServicesAppellationsApplication />}
          />
          <Route
            path="services-appellations-scheme"
            element={<ServicesAppellationsScheme />}
          />
          <Route
            path="services-appellations-rules"
            element={<ServicesAppellationsRules />}
          />
          <Route
            path="services-appellations-pass"
            element={<ServicesAppellationsSigns />}
          />
          <Route
            path="services-appellations-documents"
            element={<ServicesAppellationsDocumet />}
          />
        </Route>
        <Route path="/services-programs" element={<ServisePrograms />}>
          <Route
            path="services-programs-application"
            element={<ServicesProgramsApplication />}
          />
          <Route
            path="services-programs-scheme"
            element={<ServicesProgramsScheme />}
          />
          <Route
            path="services-programs-rules"
            element={<ServicesProgramsRules />}
          />
          <Route
            path="services-programs-pass"
            element={<ServicesProgramsSigns />}
          />
          <Route
            path="services-programs-documents"
            element={<ServicesProgramsDocumet />}
          />
        </Route>
        {/* -------------------------------------- */}
        <Route path="/regulations" element={<Regulations />} />
        <Route
          path="/international-regulations"
          element={<RegulationsInternational />}
        >
          <Route
            path="international-conventions"
            element={<InternationalConventions />}
          />
          <Route
            path="intergovernmental-agreements"
            element={<IntergovernmentalAagreements />}
          />
        </Route>

        {/* ---------------------------------------- */}
        <Route path="/information-servise" element={<InformationService />} />
        <Route
          path="/informationServise-protocols"
          element={<InformationServiseProtocols />}
        />
        <Route
          path="/informationServise-contests"
          element={<InformationServiseContests />}
        />
        <Route path="/details/:id" element={<Tenders />} />
        <Route
          path="/informationServise-media"
          element={<InformationServiseMedia />}
        />
        <Route
          path="/informationServise-releases"
          element={<InformationServiseReleases />}
        />
        <Route
          path="/informationServise-library"
          element={<InformationServiseLibrary />}
        >
          <Route path="photo" element={<PhotoPart />} />
          <Route path="video" element={<VideoPart />} />
        </Route>
        {/* Mashetgacha qildim )) */}
        <Route path="/detail/:id" element={<PhotoDetail />} />
        <Route
          path="/informationServise-editions"
          element={<InformationServiseEditions />}
        >
          <Route path="reports" element={<Reports />} />
          <Route path="indexes" element={<Indexes />} />
        </Route>

        <Route path="/laws-Uzbekistan" element={<LawsUzb />} />
        <Route path="/decrees-president" element={<DecressUzb />} />
        <Route path="/cabinet-ministers" element={<CabinetMinisters />} />
        <Route path="/industry-regulations" element={<IndustryRegulations />} />
        <Route path="/documents-invalidated" element={<Documents />} />
        <Route path="/tariffs-duties" element={<Duties />} />
        <Route path="/projects" element={<Projects />} />

        {/* News */}
        <Route path="/news" element={<News />} />
        <Route path="/all-news" element={<MainNews />} />
        <Route path="/all-news/:newsId" element={<SingleNews />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/ad/:adId" element={<SingleAd />} />
      </Routes>
    </div>
  );
}

export default App;
