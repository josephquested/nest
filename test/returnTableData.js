import test from 'tape'
import data from '../data/table.json'
import utils from '../lib'

var expectedResult = {
	"row_0": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	},
	"row_1": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	},
	"row_2": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	},
	"row_3": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	},
	"row_4": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	},
	"row_5": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	},
	"row_6": {
		"cell_0": {},
		"cell_1": {},
		"cell_2": {},
		"cell_3": {},
		"cell_4": {},
		"cell_5": {},
		"cell_6": {}
	}
}

test('returnTableData returns table 0_0, rows and cells', function (t) {
	t.deepEqual(utils.returnTableData('0_0'), expectedResult, 'Sucessfully returned table data')
	t.end()
})