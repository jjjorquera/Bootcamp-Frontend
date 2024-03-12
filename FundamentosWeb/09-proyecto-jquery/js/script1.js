$(document).ready(function() {
    let userId = 1;
  
    $('#addUserForm').submit(function(event){
      event.preventDefault();
      //* Capturo el input
      let userName = $('#userName').val().trim();
  
      // Verificar si el nombre de usuario no esta vacio
      if(userName) {
        let newUserRow =`
        <tr id="user_${userId}">
         <td>${userId}</td>
         <td class="editable" >${userName}</td>
         <td>
          <button class="btn btn-success btn-sm edit" onclick="editUser(${userId})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger btn-sm edit" onclick="deleteUser(${userId})"><i class="fas fa-trash-alt"></i></button>
         </td>
        </tr>
        `;
  
        //* Añadir la nueva fila a la tabla de usuarios
        $('#userList').append(newUserRow); //* Agregamos el registro dentro de tbody
        $('#userName').val('') //* Limpiamos el input 
        userId = userId + 1; //* userId++
      }
    });
  
    //* Escuchar el evento doble click
    $('body').on('dblclick', '.editable', function(){
      console.log(this); // al elemento html
      //* esto es this -> <td class="editable" >${userName}</td>
      activateEditMode(this);
     
    })
  });
  
  function activateEditMode(cell) {
    //* cell es -> <td class="editable" >${userName}</td>
    let currentElement = $(cell);
   
    let currentName = currentElement.text().trim();
    console.log(currentName);
  
    let inputField = $('<input>', {
      'type': 'text',
      'value': currentName,
      'class': 'form-control',
      'blur': function() {
        let newName = $(this).val().trim();
        currentElement.text(newName);
        $(this).remove();
      },
      'keypress': function(e) {
        if(e.which == 13) {
          $(this).blur();
        }
      }
    }).appendTo(currentElement.empty()).focus();
  }
  
  
  function editUser(userId) {
    // user_1
    // user_2
    let editableCell = $(`#user_${userId} .editable`);
    // s<td class="editable" >${userName}</td>
    activateEditMode(editableCell)
  }
  
  function deleteUser(id_usuario) {
    $(`#user_${id_usuario}`).remove();
  }