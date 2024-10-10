document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const leadId = params.get('id');

    const leads = [
        { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', status: 'New', source: 'Facebook' },
        { id: 2, name: 'Jane Smith', phone: '098-765-4321', email: 'jane@example.com', status: 'Contacted', source: 'Google' }
    ];

    const lead = leads.find(l => l.id == leadId);

    if (lead) {
        document.getElementById('lead-name').textContent = lead.name;
        document.getElementById('lead-phone').textContent = lead.phone;
        document.getElementById('lead-email').textContent = lead.email;
        document.getElementById('lead-status').textContent = lead.status;
        document.getElementById('lead-source').textContent = lead.source;
    }
});
