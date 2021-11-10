export class FilterObject {

    name : string;
	columnProp : string;
	 options : string[];
	 
	 public constructor(name:string,columnProp:string,options:string[]){
		this.name=name;
		this.columnProp=columnProp;
		this.options=options;
	}
}
