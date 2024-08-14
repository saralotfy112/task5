$(document).ready(function () {
    const apiUrl = 'https://your-api-endpoint.com/items';

    $('#addBtn').click(function () {
        $.ajax({
            url: apiUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: 'New Item' }),
            success: function (response) {
                console.log('Item added:', response);
            },
            error: function (error) {
                console.error('Error adding item:', error);
            }
        });
    });


    $('#updateBtn').click(function () {
        const itemId = 1;
        $.ajax({
            url: `${apiUrl}/${itemId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ name: 'Updated Item' }),
            success: function (response) {
                console.log('Item updated:', response);
            },
            error: function (error) {
                console.error('Error updating item:', error);
            }
        });
    });


    $('#deleteBtn').click(function () {
        const itemId = 1;
        $.ajax({
            url: `${apiUrl}/${itemId}`,
            type: 'DELETE',
            success: function (response) {
                console.log('Item deleted:', response);
            },
            error: function (error) {
                console.error('Error deleting item:', error);
            }
        });
    });
});
