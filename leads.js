document.addEventListener('DOMContentLoaded', async () => {
    const leads = [
        { name: 'John Doe', phone: '123-456-7890', status: 'New', source: 'Facebook', id: 1 },
        { name: 'Jane Smith', phone: '098-765-4321', status: 'Contacted', source: 'Google', id: 2 }
    ];

    const leadList = document.getElementById('lead-list');

    leads.forEach(lead => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.phone}</td>
            <td>${lead.status}</td>
            <td>${lead.source}</td>
            <td><a href="lead-details.html?id=${lead.id}">View Details</a></td>
        `;
        leadList.appendChild(row);
    });
});
