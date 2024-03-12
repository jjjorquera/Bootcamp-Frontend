$(document).ready(function() {
    let userId = 1;
    $('#addUserForm').submit(function(event) {
        event.preventDefault();
        // const input = document.querySelector('#userName').value; esto es JS
        let userName = $('#userName').val().trim(); // y esto es con Jquery ambos funcionan igual.
        
        if (userName) {
            let newUserRow = `
            <tr id="user_${userId}">
                <td>${userId}</td>
                <td>${userName}</td>
                <td>
                    <button class="btn btn-success btn-sm edit"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger btn-sm edit"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>`;

            $('#userList').append(newUserRow); //* agregamos el registro dentro del tbody.
            $('#userName').val(''); //* Limpiamos el input
            userId++ 
}})
})