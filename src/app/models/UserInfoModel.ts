export class UserInfoModel
{
	email: string;
	pseudo: string;
	mdp: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}