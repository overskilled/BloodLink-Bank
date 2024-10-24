import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Bell, Mail, MessageSquare, Send, Clock } from "lucide-react"

export default function SendingNotificationsToDonors() {
    const [selectedDonors, setSelectedDonors] = useState<string[]>([])

    const toggleDonorSelection = (donorType: string) => {
        setSelectedDonors(prev =>
            prev.includes(donorType)
                ? prev.filter(type => type !== donorType)
                : [...prev, donorType]
        )
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sending Notifications to Donors</h1>
            <Tabs defaultValue="urgent">
                <TabsList>
                    <TabsTrigger value="urgent">Urgent Requests</TabsTrigger>
                    <TabsTrigger value="campaign">Campaign</TabsTrigger>
                    <TabsTrigger value="reminder">Reminders</TabsTrigger>
                </TabsList>
                <TabsContent value="urgent">
                    <Card>
                        <CardHeader>
                            <CardTitle>Send Urgent Blood Request</CardTitle>
                            <CardDescription>Notify donors about urgent blood needs</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Select Blood Types</Label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                                            <div key={type} className="flex items-center space-x-2">
                                                <Switch
                                                    id={`blood-type-${type}`}
                                                    checked={selectedDonors.includes(type)}
                                                    onCheckedChange={() => toggleDonorSelection(type)}
                                                />
                                                <Label htmlFor={`blood-type-${type}`}>{type}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="urgentMessage">Message</Label>
                                    <Textarea
                                        id="urgentMessage"
                                        placeholder="Enter your urgent request message here..."
                                        rows={4}
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="smsNotification" />
                                    <Label htmlFor="smsNotification">Send SMS</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="emailNotification" />
                                    <Label htmlFor="emailNotification">Send Email</Label>
                                </div>
                                <Button className="w-full">
                                    <Send className="mr-2 h-4 w-4" /> Send Urgent Request
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="campaign">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create Donation Campaign</CardTitle>
                            <CardDescription>Set up a new blood donation campaign</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="campaignName">Campaign Name</Label>
                                    <Input id="campaignName" placeholder="Enter campaign name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="campaignDate">Campaign Date</Label>
                                    <Input id="campaignDate" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="campaignLocation">Location</Label>
                                    <Input id="campaignLocation" placeholder="Enter campaign location" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="campaignMessage">Campaign Message</Label>
                                    <Textarea
                                        id="campaignMessage"
                                        placeholder="Enter your campaign message here..."
                                        rows={4}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Target Donors</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select target donors" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Donors</SelectItem>
                                            <SelectItem value="certified">Certified Donors</SelectItem>
                                            <SelectItem value="new">New Donors</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full">
                                    <Bell className="mr-2 h-4 w-4" /> Launch Campaign
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="reminder">
                    <Card>
                        <CardHeader>
                            <CardTitle>Set Up Reminders</CardTitle>
                            <CardDescription>Configure automated reminders for donors</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Reminder Type</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select reminder type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="eligibility">Donation Eligibility</SelectItem>
                                            <SelectItem value="appointment">Upcoming Appointment</SelectItem>
                                            <SelectItem value="followup">Post-Donation Follow-up</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="reminderMessage">Reminder Message</Label>
                                    <Textarea
                                        id="reminderMessage"
                                        placeholder="Enter your reminder message here..."
                                        rows={4}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Reminder Frequency</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select frequency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="once">One-time</SelectItem>
                                            <SelectItem value="weekly">Weekly</SelectItem>
                                            <SelectItem value="monthly">Monthly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="smsReminder" />
                                    <Label htmlFor="smsReminder">Send SMS Reminder</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="emailReminder" />
                                    <Label htmlFor="emailReminder">Send Email Reminder</Label>
                                </div>
                                <Button className="w-full">
                                    <Clock className="mr-2 h-4 w-4" /> Set Up Reminder
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}