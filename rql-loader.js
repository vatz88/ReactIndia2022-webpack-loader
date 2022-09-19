module.exports = function (source) {
  return `export default function(){
		 // any parsing on rql if required
     // makes api call and fetches data
     return "${source.trim()}";
	}`;
};
