import { pageRegistry } from '../../../../test-data/page-registry.js';
import { registerDesignComplianceSuite } from '../../../../utils/design-compliance-suite.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'about' && page.slug === 'about-us'
);

registerDesignComplianceSuite(pageEntry);
