const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

	
const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const listNode = xmlDOM.querySelector("list");	

const childrenLen = listNode.children.length;

for (let i = 0; i < childrenLen; i++) {
	const student = xmlDOM.querySelectorAll("student")[i]; 
		
	console.log('student:', student);
}