import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, Plus, Search } from "lucide-react"

export default function CollaborationWithBloodBanks() {
    const [partnerBanks, setPartnerBanks] = useState([
        { id: 1, name: "City Blood Center", distance: "5 km", A_pos: 50, B_neg: 30, O_pos: 100 },
        { id: 2, name: "Regional Blood Bank", distance: "15 km", A_pos: 75, B_neg: 20, O_pos: 80 },
        { id: 3, name: "Community Blood Services", distance: "8 km", A_pos: 40, B_neg: 15, O_pos: 60 },
    ])

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Collaboration with Other Blood Banks</h1>
            <Tabs defaultValue="stock">
                <TabsList>
                    <TabsTrigger value="stock">Partner Stock Levels</TabsTrigger>
                    <TabsTrigger value="transfer">Blood Transfer</TabsTrigger>
                    <TabsTrigger value="request">Request Blood</TabsTrigger>
                </TabsList>
                <TabsContent value="stock">
                    <Card>
                        <CardHeader>
                            <CardTitle>Partner Blood Banks Stock Levels</CardTitle>
                            <CardDescription>View current stock levels of partner blood banks</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-2 mb-4">
                                <Input placeholder="Search blood banks..." />
                                <Button variant="outline">
                                    <Search className="mr-2 h-4 w-4" /> Search
                                </Button>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Blood Bank</TableHead>
                                        <TableHead>Distance</TableHead>
                                        <TableHead>A+</TableHead>
                                        <TableHead>B-</TableHead>
                                        <TableHead>O+</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {partnerBanks.map((bank) => (
                                        <TableRow key={bank.id}>
                                            <TableCell>{bank.name}</TableCell>
                                            <TableCell>{bank.distance}</TableCell>
                                            <TableCell>{bank.A_pos}</TableCell>
                                            <TableCell>{bank.B_neg}</TableCell>
                                            <TableCell>{bank.O_pos}</TableCell>
                                            <TableCell>
                                                <Button variant="outline" size="sm">
                                                    <ArrowLeftRight className="mr-2 h-4 w-4" /> Transfer
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="transfer">
                    <Card>
                        <CardHeader>
                            <CardTitle>Initiate Blood Transfer</CardTitle>
                            <CardDescription>Transfer blood units to partner blood banks</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="recipient">Recipient Blood Bank</Label>
                                        <Select>
                                            <SelectTrigger id="recipient">
                                                <SelectValue placeholder="Select recipient" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {partnerBanks.map((bank) => (
                                                    <SelectItem key={bank.id} value={bank.id.toString()}>{bank.name}</SelectItem>
                                                ))}
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
                                <div className="space-y-2">
                                    <Label htmlFor="units">Number of Units</Label>
                                    <Input id="units" type="number" min="1" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="transferDate">Transfer Date</Label>
                                    <Input id="transferDate" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notes">Additional Notes</Label>
                                    <Input id="notes" placeholder="Enter any additional information" />
                                </div>
                                <Button className="w-full">
                                    <ArrowLeftRight className="mr-2 h-4 w-4" /> Initiate Transfer
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="request">
                    <Card>
                        <CardHeader>
                            <CardTitle>Request Blood from Partners</CardTitle>
                            <CardDescription>Submit a request for blood units from partner blood banks</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="requestBloodType">Blood Type Needed</Label>
                                        <Select>
                                            <SelectTrigger id="requestBloodType">
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
                                    <div className="space-y-2">
                                        <Label htmlFor="requestUnits">Units Needed</Label>
                                        <Input id="requestUnits" type="number" min="1" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="urgency">Urgency Level</Label>
                                    <Select>
                                        <SelectTrigger id="urgency">
                                            <SelectValue placeholder="Select urgency level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                            <SelectItem value="critical">Critical</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="requestNotes">Request Details</Label>
                                    <Input id="requestNotes" placeholder="Provide any additional details for your request" />
                                </div>
                                <Button className="w-full">
                                    <Plus className="mr-2 h-4 w-4" /> Submit Request
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}