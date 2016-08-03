import * as common from 'test/specs/commonTests'

import Grid from 'src/collections/Grid/Grid'
import GridColumn from 'src/collections/Grid/GridColumn'
import GridRow from 'src/collections/Grid/GridRow'

describe('Grid', () => {
  common.isConformant(Grid)
  common.hasUIClassName(Grid)
  common.rendersChildren(Grid)
  common.hasSubComponents(Grid, [GridRow, GridColumn])

  common.implementsNumberToWordProp(Grid, 'column')
  common.propKeyOrValueToClassName(Grid, 'celled')
  common.propKeyOnlyToClassName(Grid, 'centered')
  common.propKeyOrValueToClassName(Grid, 'divided')
  common.propKeyOnlyToClassName(Grid, 'doubling')
  common.propKeyOrValueToClassName(Grid, 'padded')
  common.propKeyOrValueToClassName(Grid, 'relaxed')
  common.propKeyAndValueToClassName(Grid, 'reversed')
  common.propKeyOnlyToClassName(Grid, 'stackable')
  common.implementsTextAlignProp(Grid)
  common.implementsVerticalAlignProp(Grid)
  common.propKeyAndValueToClassName(Grid, 'width')
})
