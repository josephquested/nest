var path = require('path')
var test = require('tape')
var data = require('../data/table.json')

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

test('readTableData returns table 0_0, rows and cells', function (t) {
	t.deepEqual(data.tables['0_0'], expectedResult, 'Sucessfully returned table data')
	t.end()
})