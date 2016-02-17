'use strict'

import test from 'tape'
import utils from '../lib'

const expectedTableData = {
  'tables': {
    't_0_0': {
      'row_0': {
        'cell_0_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_0_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_0_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_0_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_0_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_0_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_0_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      },
      'row_1': {
        'cell_1_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_1_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_1_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_1_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_1_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_1_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_1_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      },
      'row_2': {
        'cell_2_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_2_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_2_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_2_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_2_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_2_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_2_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      },
      'row_3': {
        'cell_3_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_3_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_3_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_3_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_3_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_3_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_3_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      },
      'row_4': {
        'cell_4_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_4_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_4_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_4_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_4_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_4_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_4_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      },
      'row_5': {
        'cell_5_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_5_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_5_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_5_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_5_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_5_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_5_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      },
      'row_6': {
        'cell_6_0': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_6_1': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_6_2': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_6_3': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_6_4': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_6_5': {
          'data': {
            'players': [],
            'feature': {}
          }
        },
        'cell_6_6': {
          'data': {
            'players': [],
            'feature': {}
          }
        }
      }
    }
  }
}

const expectedPlayerData = {
  'players': {
    'p_0': {
      'id': 'p_0',
      'name': 'JJWQ',
      'health': 'good',
      'hunger': 'full',
      'age': 'one day',
      'inventory': {
        'wood': 0,
        'meat': 0,
        'rock': 0,
        'teeth': 0
      }
    }
  }
}

test('returnDatabaseObject returns the table and player databases', function (t) {
  utils.returnDatabaseObject('tables', (tableData) => {
    t.deepEqual(tableData, expectedTableData, 'Sucessfully returned table data')
  })
  utils.returnDatabaseObject('players', (playerData) => {
    t.deepEqual(playerData, expectedPlayerData, 'Sucessfully returned player data')
    t.end()
  })
})
