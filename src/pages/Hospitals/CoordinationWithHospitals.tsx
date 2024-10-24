import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Calendar, Clock, MapPin, Truck } from "lucide-react"

export default function CoordinationWithHospitals() {
    const [urgentRequests, setUrgentRequests] = useState([
        { id: 1, hospital: "Central Hospital", bloodType: "O-", units: 2, status: "Pending" },
        { id: 2, hospital: "City Medical Center", bloodType: "A+", units: 3, status: "In Progress" },
        { id: 3, hospital: "St. Mary's Hospital", bloodType: "B-", units: 1, status: "Scheduled" },
    ])

    const updateRequestStatus = (id: number, newStatus: string) => {
        setUrgentRequests(urgentRequests.map(request =>
            request.id === id ? { ...request, status: newStatus } : request
        ))
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Coordination with Hospitals</h1>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Urgent Blood Requests</CardTitle>
                    <CardDescription>Respond to and manage urgent requests from hospitals</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Hospital</TableHead>
                                <TableHead>Blood Type</TableHead>
                                <TableHead>Units</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {urgentRequests.map((request) => (
                                <TableRow key={request.id}>
                                    <TableCell>{request.hospital}</TableCell>
                                    <TableCell>{request.bloodType}</TableCell>
                                    <TableCell>{request.units}</TableCell>
                                    <TableCell>
                                        <Badge variant={request.status === 'Scheduled' ? 'success' :
                                            request.status === 'In Progress' ? 'warning' : 'secondary'}>
                                            {request.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Select onValueChange={(value) => updateRequestStatus(request.id, value)}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Update Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Pending">Pending</SelectItem>
                                                <SelectItem value="In Progress">In Progress</SelectItem>
                                                <SelectItem value="Scheduled">Scheduled</SelectItem>
                                                <SelectItem value="Delivered">Delivered</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Schedule Blood Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="hospital">Hospital</Label>
                                <Select>
                                    <SelectTrigger id="hospital">
                                        <SelectValue placeholder="Select hospital" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="central">Central Hospital</SelectItem>
                                        <SelectItem value="city">City Medical Center</SelectItem>
                                        <SelectItem value="stmarys">St. Mary's Hospital</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bloodType">Blood Type</Label>
                                <Select>
                                    <SelectTrigger id="bloodType">
                                        <SelectValue placeholder="Select blood type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A+">A+</SelectItem>
                                        <SelectItem value="A-">A-</SelectItem>
                                        <SelectItem value="B+">B+</SelectItem>
                                        <SelectItem value="B-">B-</SelectItem>
                                        <SelectItem value="AB+">AB+</SelectItem>
                                        <SelectItem value="AB-">AB-</SelectItem>
                                        <SelectItem value="O+">O+</SelectItem>
                                        <SelectItem value="O-">O-</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="units">Units</Label>
                                <Input id="units" type="number" min="1" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="deliveryDate">Delivery Date</Label>
                                <Input id="deliveryDate" type="date" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Input id="notes" placeholder="Enter any additional information" />
                        </div>
                        <Button className="w-full">Schedule Delivery</Button>
                    </form>
                </CardContent>
            </Card>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Upcoming Deliveries</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <Calendar className="h-6 w-6 text-blue-600" />
                                <div>
                                    <p className="font-semibold">Central Hospital</p>
                                    <p className="text-sm text-gray-600">3 units of A+ blood</p>
                                </div>
                            </div>
                            <Badge>Today</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <Truck className="h-6 w-6 text-green-600" />
                                <div>
                                    <p className="font-semibold">City Medical Center</p>
                                    <p className="text-sm text-gray-600">2 units of O- blood</p>
                                </div>
                            </div>
                            <Badge variant="outline">Tomorrow</Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}