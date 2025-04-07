import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ConnectFormModal = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className='underline text-orange-500 cursor-pointer'>
          Connect Form
        </span>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold text-center'>
            We'd Love to Meet You
          </DialogTitle>
          <DialogDescription className='text-center text-sm'>
            At RCCG StrongTower Stouffville, we're excited to connect with you!
            Please fill out this form so we can better serve you and welcome you
            properly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
          <div className='space-y-2'>
            <Label htmlFor='fullName'>Full Name</Label>
            <Input id='fullName' placeholder='Your name' required />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              type='email'
              placeholder='your.email@example.com'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input id='phone' type='tel' placeholder='(123) 456-7890' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='address'>Address</Label>
            <Input id='address' placeholder='Your address' />
          </div>

          <div className='space-y-2'>
            <Label>Are you new to our church?</Label>
            <RadioGroup defaultValue='yes' className='flex gap-4'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='yes' id='new-yes' />
                <Label htmlFor='new-yes'>Yes</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='no' id='new-no' />
                <Label htmlFor='new-no'>No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className='space-y-2'>
            <Label>How did you hear about us?</Label>
            <div className='grid grid-cols-2 gap-2'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='friend' />
                <Label htmlFor='friend'>Friend/Family</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='social' />
                <Label htmlFor='social'>Social Media</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='website' />
                <Label htmlFor='website'>Website</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='event' />
                <Label htmlFor='event'>Event</Label>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <Label>Which services are you interested in?</Label>
            <div className='grid grid-cols-2 gap-2'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='sunday' />
                <Label htmlFor='sunday'>Sunday Service</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='bible' />
                <Label htmlFor='bible'>Bible Study</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='prayer' />
                <Label htmlFor='prayer'>Prayer Meeting</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='youth' />
                <Label htmlFor='youth'>Youth/Children Programs</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='community' />
                <Label htmlFor='community'>Community Outreach</Label>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='questions'>
              Do you have any questions or prayer requests?
            </Label>
            <Textarea
              id='questions'
              placeholder='Share with us...'
              className='min-h-[80px]'
            />
          </div>

          <Button
            type='submit'
            className='w-full bg-orange-500 hover:bg-orange-600'
          >
            Send Message
          </Button>

          <p className='text-xs text-center text-gray-500 mt-4'>
            Thank you for reaching out to us! Your details will be kept
            confidential and are being collected solely to help us connect with
            you. We look forward to welcoming you to our church family.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectFormModal;
