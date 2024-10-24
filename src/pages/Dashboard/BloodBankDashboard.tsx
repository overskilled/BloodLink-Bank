import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from 'react-router-dom'
import {
    Droplet,
    Users,
    Bell,
    ClipboardList,
    Hospital,
    Share2,
    UserCog,
    AlertTriangle,
} from "lucide-react"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BloodBankDashboard() {
    const [bloodStock, setBloodStock] = useState({
        "A+": 50,
        "A-": 30,
        "B+": 40,
        "B-": 20,
        "AB+": 15,
        "AB-": 10,
        "O+": 60,
        "O-": 35
    })

    const [recentRequests, setRecentRequests] = useState([
        { id: 1, hospital: "Central Hospital", bloodType: "O-", units: 2, urgency: "High" },
        { id: 2, hospital: "City Medical Center", bloodType: "A+", units: 3, urgency: "Medium" },
        { id: 3, hospital: "St. Mary's Hospital", bloodType: "B+", units: 1, urgency: "Low" },
    ])

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Blood Bank Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg" alt="Blood Bank Admin" />
                            <AvatarFallback>BB</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Blood Units</CardTitle>
                                <Droplet className="h-4 w-4 text-red-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{Object.values(bloodStock).reduce((a, b) => a + b, 0)}</div>
                                <p className="text-xs text-muted-foreground">
                                    +20% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Certified Donors</CardTitle>
                                <Users className="h-4 w-4 text-blue-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2,350</div>
                                <p className="text-xs text-muted-foreground">
                                    +180 new this month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                                <ClipboardList className="h-4 w-4 text-yellow-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">18</div>
                                <p className="text-xs text-muted-foreground">
                                    5 urgent requests
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Partner Hospitals</CardTitle>
                                <Hospital className="h-4 w-4 text-green-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs text-muted-foreground">
                                    2 new partnerships this quarter
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Blood Stock Levels</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-4">
                                    {Object.entries(bloodStock).map(([type, units]) => (
                                        <div key={type} className="flex flex-col items-center">
                                            <div className="text-2xl font-bold">{units}</div>
                                            <div className="text-sm text-muted-foreground">{type}</div>
                                            <div className={`w-full h-2 rounded-full mt-2 ${units < 20 ? 'bg-red-500' : units < 40 ? 'bg-yellow-500' : 'bg-green-500'
                                                }`}></div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link to="/blood-stock-management">Manage Blood Stock</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Blood Requests</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentRequests.map((request) => (
                                        <div key={request.id} className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">{request.hospital}</p>
                                                <p className="text-sm text-muted-foreground">{request.bloodType} - {request.units} units</p>
                                            </div>
                                            <Badge variant={
                                                request.urgency === 'High' ? 'destructive' :
                                                    request.urgency === 'Medium' ? 'warning' : 'secondary'
                                            }>{request.urgency}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="outline" className="w-full">
                                    <Link to="/tracking-blood-requests">View All Requests</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button asChild className="w-full justify-start">
                                    <Link to="/certifying-donors">
                                        <Users className="mr-2 h-4 w-4" /> Certify Donors
                                    </Link>
                                </Button>
                                <Button asChild className="w-full justify-start">
                                    <Link to="/sending-notifications-to-donors">
                                        <Bell className="mr-2 h-4 w-4" /> Send Notifications
                                    </Link>
                                </Button>
                                <Button asChild className="w-full justify-start">
                                    <Link to="/coordination-with-hospitals">
                                        <Hospital className="mr-2 h-4 w-4" /> Coordinate with Hospitals
                                    </Link>
                                </Button>
                                <Button asChild className="w-full justify-start">
                                    <Link to="/collaboration-with-blood-banks">
                                        <Share2 className="mr-2 h-4 w-4" /> Collaborate with Blood Banks
                                    </Link>
                                </Button>
                                <Button asChild className="w-full justify-start">
                                    <Link to="/editing-donor-information">
                                        <UserCog className="mr-2 h-4 w-4" /> Edit Donor Information
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Urgent Alerts</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2 text-yellow-600">
                                    <AlertTriangle className="h-5 w-5" />
                                    <span>Low stock alert: O- blood type (35 units remaining)</span>
                                </div>
                                <div className="flex items-center space-x-2 text-red-600">
                                    <AlertTriangle className="h-5 w-5" />
                                    <span>Critical shortage: AB- blood type (10 units remaining)</span>
                                </div>
                                <div className="flex items-center space-x-2 text-blue-600">
                                    <Bell className="h-5 w-5" />
                                    <span>5 new donor applications pending review</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">View All Alerts</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Upcoming Blood Drives</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="font-medium">Community Center Drive</p>
                                    <p className="text-sm text-muted-foreground">July 15, 2024 - 50 registered donors</p>
                                </div>
                                <div>
                                    <p className="font-medium">University Campus Event</p>
                                    <p className="text-sm text-muted-foreground">July 22, 2024 - 75 registered donors</p>
                                </div>
                                <div>
                                    <p className="font-medium">Corporate Office Drive</p>
                                    <p className="text-sm text-muted-foreground">August 5, 2024 - 30 registered donors</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Manage Blood Drives</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}