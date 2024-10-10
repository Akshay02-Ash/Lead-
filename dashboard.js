document.addEventListener('DOMContentLoaded', () => {
    const dashboardStats = document.getElementById('dashboard-stats');
    
    // Dummy statistics for the dashboard
    const stats = {
        totalLeads: 50,
        newLeads: 20,
        contactedLeads: 15,
        qualifiedLeads: 10,
        closedLeads: 5
    };

    dashboardStats.innerHTML = `
        <p><strong>Total Leads:</strong> ${stats.totalLeads}</p>
        <p><strong>New Leads:</strong> ${stats.newLeads}</p>
        <p><strong>Contacted Leads:</strong> ${stats.contactedLeads}</p>
        <p><strong>Qualified Leads:</strong> ${stats.qualifiedLeads}</p>
        <p><strong>Closed Leads:</strong> ${stats.closedLeads}</p>
    `;
});
