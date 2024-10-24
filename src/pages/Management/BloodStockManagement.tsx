import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Droplet, AlertTriangle, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BloodStockManagement() {
    const [stocks, setStocks] = useState([
        { id: 1, type: "A+", quantity: 50, expirationDate: "2024-07-15", status: "Available" },
        { id: 2, type: "O-", quantity: 30, expirationDate: "2024-07-10", status: "Low" },
        { id: 3, type: "B+", quantity: 40, expirationDate: "2024-07-20", status: "Available" },
        { id: 4, type: "AB-", quantity: 10, expirationDate: "2024-07-05", status: "Critical" },
    ])

    const addStock = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newStock = {
            id: stocks.length + 1,
            type: formData.get("bloodType") as string,
            quantity: parseInt(formData.get("quantity") as string),
            expirationDate: formData.get("expirationDate") as string,
            status: "Available",
        }
        setStocks([...stocks, newStock])
        event.currentTarget.reset()
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

                <Tabs defaultValue="current">
                    <TabsList>
                        <TabsTrigger value="current">Current Stock</TabsTrigger>
                        <TabsTrigger value="add">Add Stock</TabsTrigger>
                    </TabsList>
                    <TabsContent value="current">
                        <Card>
                            <CardHeader>
                                <CardTitle>Current Blood Stock</CardTitle>
                                <CardDescription>Overview of available blood units</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Blood Type</TableHead>
                                            <TableHead>Quantity</TableHead>
                                            <TableHead>Expiration Date</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {stocks.map((stock) => (
                                            <TableRow key={stock.id}>
                                                <TableCell>{stock.type}</TableCell>
                                                <TableCell>{stock.quantity}</TableCell>
                                                <TableCell>{stock.expirationDate}</TableCell>
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                          ${stock.status === 'Available' ? 'bg-green-100 text-green-800' :
                                                            stock.status === 'Low' ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-red-100 text-red-800'}`}>
                                                        {stock.status}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="add">
                        <Card>
                            <CardHeader>
                                <CardTitle>Add New Stock</CardTitle>
                                <CardDescription>Enter details for new blood stock</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={addStock} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="bloodType">Blood Type</Label>
                                            <Select name="bloodType" required>
                                                <SelectTrigger>
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
                                            <Label htmlFor="quantity">Quantity</Label>
                                            <Input type="number" id="quantity" name="quantity" required min="1" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="expirationDate">Expiration Date</Label>
                                        <Input type="date" id="expirationDate" name="expirationDate" required />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Stock
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle>Stock Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-yellow-600">
                                <AlertTriangle className="h-5 w-5" />
                                <span>Low stock alert: O- blood type (30 units remaining)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-red-600">
                                <Droplet className="h-5 w-5" />
                                <span>Critical shortage: AB- blood type (10 units remaining)</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}