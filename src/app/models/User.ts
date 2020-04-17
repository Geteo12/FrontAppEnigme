export class User
{
    guid: string;
    
	customerUid: string;
	
	first_name: string;

	email: string;

	password: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}