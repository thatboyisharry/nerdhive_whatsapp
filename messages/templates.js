class TextUI{
          constructor(name,body){
              this.name=name;
              this.type='text';
              this.value={
                  "messaging_product": "whatsapp",
                  recipient_type:"individual",
                  to:'',
                  type:"text",
                  text:{
                      body:body
                  }
              }
          }
      }


      class InteractiveButton {
          constructor(name){
              this.name=name;
              this.type='interactive';
              this.value={
                  type:'button',
    
                  body:{
                      text:" "
                  },
                  action:{
                      buttons:[]
                  }
              }

          }

      }

 class InteractiveList {
    constructor(name){
        this.name=name;
        this.type='interactive';
        this.value={
            type:'list',
            header:{
                type:"text",
                text:""
            },
            body:{
                text:""
            },
            footer:{
                text:""
            },
            action:{
                button:"Send",
                sections:[]
            }
        }

    }

}


 class Button{
    constructor(button_id,button_title){
        this.type='reply'
        this.reply={
            id:button_id,
            title:button_title
        }
    }
}

 class Section{
    constructor(title){
        this.title=title,
        this.rows=[]
    }
}

 class Row{
    constructor(row_id,row_title,description="description"){
        this.id=row_id;
        this.title=row_title;
        this.description=description;
    }
}





const createButton=(btn_id,btn_title)=>{
    let button =new Button(btn_id,btn_title)
    return button
}

 const createInteractiveButton=(name,buttons)=>{
    //buttons is an array with button objects with id and title as fields
    let interactiveButton = new InteractiveButton(name)
    for(let i = 0 ; i < buttons.length; i ++){
        let button = buttons[i];
        interactiveButton.value.action.buttons.push(button)
    }
    return interactiveButton;

}

 const createTextUI=(name,body)=>{
    let textUI=new TextUI(name,body)
    return textUI
}


const createSection=(title,rows)=>{
    let section= new Section(title);
    for(let i=0; i<rows.length; i++){
        let row = rows[i]
        section.rows.push(row)
    }

    return section

}

 const createRow=(id,title,description)=>{
    let row = new Row(id,title,description)
    return row

}

 const createInteractiveList=(name,sections)=>{
    let interactive_list = new InteractiveList(name);
   for(let i=0;i<sections.length;i++){
      let section = sections[i];
     interactive_list.value.action.sections.push(section)
   }
    return interactive_list

}  

module.exports={
  createTextUI,
  createButton,
  createInteractiveList,
  createInteractiveButton,
  createSection,
  createRow
}