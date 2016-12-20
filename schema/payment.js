exports.schema = 
  {
    properties :
    {
    //Id: generate in middle
    //
      
    //RefMonth:
      RefMonth: {
	description: 'Insert the standard three letter abbreviation for the month the payment refers to',
	type: 'string',
	//pattern:
	//message: 'Invalid description. Try one of these: (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)',
	required: true
      },
                 
    //Deadline:
      Deadline: {
	description: 'What was the deadline that was agreed upon? Leave blank if there was no deadline",
	//type: date,
	//pattern: 
	//mesasge: 'Invalid date. Try again.',
	required: false
        },
    //Date:
      PayDate: {
	description: 'What is the date the was the payment made?',
	//type: date
	//pattern:
	//message: 'Invalid date. Try again.',
	required: true
      },
    //Amount:
      Amount: {
	description: 'What was the amount of the payment? (If there is more than one payment within the RefMonth then create a seperate payment enty for each payment, rather than globbing them together into a single payment entry. We do this because some students pay twice a month, some students have a pre-paid plan with credits, some students for lack of funds or logistical reasnos don\'t pay the full amount for the month on the same day of the month\) So, please, seperate entries.' 
	type: integer,
	//pattern: 
	//message: 
	required: true
      },
    //Rate:
      Rate: {
	description: 'What is the hourly rate that the student paid for the package? If the classes were group then put the amount of their monthly payment',
	type: integer,
	//pattern:
	//message:
	required: true
      },
    //Type:
      Type: {
	description: 'Type of Payment. (Cash, Transfer, Check, PagSeguro, Bitcoin),
        type: string,
        //pattern:
	//message: 
	required: true
      }
    }
