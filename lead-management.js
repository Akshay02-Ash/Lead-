document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('lead-management-form');

    leadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const leadData = {
            name: document.getElementById('lead-name').value,
            phone: document.getElementById('lead-phone').value,
            status: document.getElementById('lead-status').value,
            source: document.getElementById('lead-source').value,
        };

        console.log("Lead Updated:", leadData);
        alert(`Lead ${leadData.name} has been updated successfully!`);
    });
});
