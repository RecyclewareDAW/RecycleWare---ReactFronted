export default function ButtonSidebar({ tabId, activeTab, setActiveTab, icon, label }) {
    return (
        <button 
            className={`list-group-item list-group-item-action ${activeTab === tabId ? 'active' : ''}`} 
            onClick={() => setActiveTab(tabId)}
        >
            <i className={`bi ${icon} me-2`}></i> {label}
        </button>
    );
}