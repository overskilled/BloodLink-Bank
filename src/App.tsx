import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BloodBankDashboard from './pages/Dashboard/BloodBankDashboard'
import BloodStockManagement from './pages/Management/BloodStockManagement'
import TrackingBloodRequests from './pages/BloodRequest/TrackingBloodRequests'
import CertifyingDonors from './pages/Donors/Certifying'
import SendingNotificationsToDonors from './pages/Donors/Notification'
import CoordinationWithHospitals from './pages/Hospitals/CoordinationWithHospitals'
import CollaborationWithBloodBanks from './pages/BloodBanks/Collaboration'
import Login from './pages/Auth/Login'
import EditingDonorInformation from './pages/Donors/EditingInfo'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<BloodBankDashboard />} />
        <Route path="/blood-stock-management" element={<BloodStockManagement />} />
        <Route path="/tracking-blood-requests" element={<TrackingBloodRequests />} />
        <Route path="/certifying-donors" element={<CertifyingDonors />} />
        <Route path="/sending-notifications-to-donors" element={<SendingNotificationsToDonors />} />
        <Route path="/coordination-with-hospitals" element={<CoordinationWithHospitals />} />
        <Route path="/collaboration-with-blood-banks" element={<CollaborationWithBloodBanks />} />
        <Route path="/editing-donor-information" element={<EditingDonorInformation   />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
