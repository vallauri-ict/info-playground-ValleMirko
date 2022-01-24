'use strict'
function visualizza(index){
	let msg = " ";
	switch(index){
		case 1:
		msg=_form1.find("input[type=text]:first-of-type").val();
		break;
		case 2:
		//msg=_form1.find("select:first-of-type").val();
		msg=_form1.find("select").first().val();
		msg=_form1.children("label").eq(1).children("select").val()
		msg=_form1.children("label").children("select").val()
		break;
		case 3:
		/*_form1.find("input[type=checkbox]").each(function (index, element) {
			msg += $(element).val() + "\n";
		});*/
		let _chk=_form1.children("fieldset:nth-of-type(1)").find("input[type=checkbox]");
		_chk.each(function (i, ref){
			msg+=$(ref).prop("name")+" "+$(ref).val()+"\n";
		})
			break;
			case 4:
		_form1.find("input[type=checkbox]:checked").each(function (index, element) {
			msg += $(element).val() + "\n";
		});
				break;

	}
}
let _form1;
$(document).ready(function(){	
	_form1=$("#form1")

})



