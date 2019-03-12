const fs = require("fs");

function readCsv(filename) {
	var storeArray = [];
	const result = fs.readFileSync(filename, "utf-8");
	result.split("\r\n").forEach((element, index_1) => {
		var storage = [];
		element.split(",").forEach((data, index_2) => {
			if (index_1 !== 0) {
				if (index_2 !== 0) {
					storage.push({[storeArray[0][""][index_2 - 1]] :eval(data)});
				} else 
					storage.push(data);
			} else
				storage.push(data);
		});
		storeArray.push({[storage[0]]: storage.slice(1)});
	});
	storeArray.pop();
	return storeArray;
}

module.exports = readCsv;