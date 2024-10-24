import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Search } from "lucide-react"

export default function CertifyingDonors() {
    const [donors, setDonors] = useState([
        { id: 1, name: "John Doe", bloodType: "A+", donationDate: "2024-06-01", status: "Pending" },
        { id: 2, name: "Jane Smith", bloodType: "O-", donationDate: "2024-06-02", status: "Certified" },
        { id: 3, name: "Alice Johnson", bloodType: "B+", donationDate: "2024-06-03", status: "Non-Certified" },
        { id: 4, name: "Bob Williams", bloodType: "AB+", donationDate: "2024-06-04", status: "Pending" },
    ])

    const certifyDonor = (id: number, newStatus: string) => {
        setDonors(donors.map(donor =>
            donor.id === id ? { ...donor, status: newStatus } : donor
        ))
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Certifying Qualified Donors</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Donor Certification</CardTitle>
                    <CardDescription>Verify and certify donors based on blood quality results</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2 mb-4">
                        <Input placeholder="Search donors..." />
                        <Button variant="outline">
                            <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Blood Type</TableHead>
                                <TableHead>Donation Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {donors.map((donor) => (
                                <TableRow key={donor.id}>
                                    <TableCell>{donor.name}</TableCell>
                                    <TableCell>{donor.bloodType}</TableCell>
                                    <TableCell>{donor.donationDate}</TableCell>
                                    <TableCell>
                                        <Badge variant={donor.status === 'Certified' ? 'success' :
                                            donor.status === 'Non-Certified' ? 'destructive' : 'secondary'}>
                                            {donor.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {donor.status === 'Pending' && (
                                            <div className="flex space-x-2">
                                                <Button size="sm" onClick={() => certifyDonor(donor.id, 'Certified')}>
                                                    <CheckCircle className="mr-2 h-4 w-4" /> Certify
                                                </Button>
                                                <Button size="sm" variant="destructive" onClick={() => certifyDonor(donor.id, 'Non-Certified')}>
                                                    <XCircle className="mr-2 h-4 w-4" /> Reject
                                                </Button>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Certification Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="donorId">Donor ID</Label>
                                <Input id="donorId" placeholder="Enter donor ID" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bloodQuality">Blood Quality</Label>
                                <Select>
                                    <SelectTrigger id="bloodQuality">
                                        <SelectValue placeholder="Select quality" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="excellent">Excellent</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                        <SelectItem value="fair">Fair</SelectItem>
                                        <SelectItem value="poor">Poor</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Input id="notes" placeholder="Enter any additional notes" />
                        </div>
                        <Button className="w-full">Submit Certification</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}