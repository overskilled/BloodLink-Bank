import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Edit, Save } from "lucide-react"

// Define the donor type for TypeScript
interface Donor {
    id: number
    name: string
    bloodType: string
    lastDonation: string
    status: "Active" | "Inactive" // Limit status to valid string literals
}

export default function EditingDonorInformation() {
    // Specify the type of the state variables
    const [donors, setDonors] = useState<Donor[]>([
        { id: 1, name: "John Doe", bloodType: "A+", lastDonation: "2024-05-15", status: "Active" },
        { id: 2, name: "Jane Smith", bloodType: "O-", lastDonation: "2024-04-20", status: "Inactive" },
        { id: 3, name: "Alice Johnson", bloodType: "B+", lastDonation: "2024-06-01", status: "Active" },
    ])

    const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null)

    // Add type for the function parameter
    const selectDonorForEdit = (donor: Donor) => {
        setSelectedDonor(donor)
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Editing Donor Information</h1>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Donor Search</CardTitle>
                    <CardDescription>Find a donor to edit their information</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2">
                        <Input placeholder="Search donors by name or ID..." className="flex-1" />
                        <Button variant="outline">
                            <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Donor List</CardTitle>
                        <CardDescription>Select a donor to edit their information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Blood Type</TableHead>
                                    <TableHead>Last Donation</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {donors.map((donor) => (
                                    <TableRow key={donor.id}>
                                        <TableCell>{donor.name}</TableCell>
                                        <TableCell>{donor.bloodType}</TableCell>
                                        <TableCell>{donor.lastDonation}</TableCell>
                                        <TableCell>
                                            <Badge variant={donor.status === 'Active' ? 'success' : 'secondary'}>
                                                {donor.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm" onClick={() => selectDonorForEdit(donor)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Donor Information</CardTitle>
                        <CardDescription>Update the selected donor's details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {selectedDonor ? (
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue={selectedDonor.name} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="bloodType">Blood Type</Label>
                                        <Select defaultValue={selectedDonor.bloodType}>
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
                                    <div className="space-y-2">
                                        <Label htmlFor="lastDonation">Last Donation Date</Label>
                                        <Input id="lastDonation" type="date" defaultValue={selectedDonor.lastDonation} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="status">Donor Status</Label>
                                    <Select defaultValue={selectedDonor.status}>
                                        <SelectTrigger id="status">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Active">Active</SelectItem>
                                            <SelectItem value="Inactive">Inactive</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="medicalHistory">Medical History</Label>
                                    <Textarea id="medicalHistory" placeholder="Enter any relevant medical history..." />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="eligibleToDonate" />
                                    <Label htmlFor="eligibleToDonate">Eligible to donate</Label>
                                </div>
                                <Button className="w-full">
                                    <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                            </form>
                        ) : (
                            <p className="text-center text-gray-500">Select a donor from the list to edit their information.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
