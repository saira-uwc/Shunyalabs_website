import { pageRegistry } from '../../../../test-data/page-registry.js';
import { registerDesignComplianceSuite } from '../../../../utils/design-compliance-suite.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'models' && page.slug === 'specialised-models'
);

registerDesignComplianceSuite(pageEntry);
