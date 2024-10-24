import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ArrowUpDown, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TrackingBloodRequests() {
    const [requests, setRequests] = useState([
        { id: 1, hospital: "Central Hospital", bloodType: "A+", units: 3, urgency: "High", status: "Pending" },
        { id: 2, hospital: "City Medical Center", bloodType: "O-", units: 2, urgency: "Medium", status: "In Progress" },
        { id: 3, hospital: "St. Mary's Hospital", bloodType: "B+", units: 1, urgency: "Low", status: "Fulfilled" },
        { id: 4, hospital: "General Hospital", bloodType: "AB-", units: 4, urgency: "High", status: "Pending" },
    ])

    const updateRequestStatus = (id: number, newStatus: string) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: newStatus } : request
        ))
    }

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
            <div className="container mx-auto p-4">

                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All Requests</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="inProgress">In Progress</TabsTrigger>
                        <TabsTrigger value="fulfilled">Fulfilled</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <Card>
                            <CardHeader>
                                <CardTitle>Blood Requests</CardTitle>

                                <CardDescription>Manage and track all incoming blood requests</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex space-x-2 mb-4">
                                    <Input placeholder="Search requests..." />
                                    <Button variant="outline">
                                        <Search className="mr-2 h-4 w-4" /> Search
                                    </Button>
                                    <Button variant="outline">
                                        <Filter className="mr-2 h-4 w-4" /> Filter
                                    </Button>
                                    <Button variant="outline">
                                        <ArrowUpDown className="mr-2 h-4 w-4" /> Sort
                                    </Button>
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Hospital</TableHead>
                                            <TableHead>Blood Type</TableHead>
                                            <TableHead>Units</TableHead>
                                            <TableHead>Urgency</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {requests.map((request) => (
                                            <TableRow key={request.id}>
                                                <TableCell>{request.hospital}</TableCell>
                                                <TableCell>{request.bloodType}</TableCell>
                                                <TableCell>{request.units}</TableCell>
                                                <TableCell>
                                                    <Badge variant={request.urgency === 'High' ? 'destructive' :
                                                        request.urgency === 'Medium' ? 'warning' : 'secondary'}>
                                                        {request.urgency}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant={request.status === 'Fulfilled' ? 'success' :
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
                                                            <SelectItem value="Fulfilled">Fulfilled</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    {/* Similar content for other tabs, omitted for brevity */}
                </Tabs>
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle>Assign Blood Stock</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="requestId">Request ID</Label>
                                    <Input id="requestId" placeholder="Enter request ID" />
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
                            <div className="space-y-2">
                                <Label htmlFor="units">Units to Assign</Label>
                                <Input id="units" type="number" min="1" />
                            </div>
                            <Button className="w-full">Assign Blood Stock</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}