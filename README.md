# Jobs Board Listing

## Build Project
1. Clone the repo
2. Run `yarn install` to build the node_modules
3. Run `yarn dev` to lanch the project in http://localhost:5173

### Project Rationale
My approach to this project was by achieving the MVP while balancing good performance. Given that this API is one that does not return much data and does not change often I defined the MVP as below

#### MVP
- Create Search Input
- Create Button Categories
- Create sort buttons
- Display Job Cards

#### Project considerations

- I decided to base this project on vite in order to quickly and efficiently get the environment started given the time constraint
- First I fetched the API data and handled the state management by using a react hook called "UseJobs". This returns normalized data, as well as loading and error states. This makes the code more readable.
- Then from that data i created functions for filtering and sorting from derived state memoizing state where needed. 
**Fetch Data:** I took the normalized data and created a JobsList and Jobs Card Component and displayed the jobs, posting date, company name, title, and url.
	- ***Tradeoff***: I could have considered more carefully what data to add but i decided to keep it very minimal to save time. I would consider placement more if I had more time, for example where does the users eye natrually travel when looking for the link to open the job listing. 
- **Search Bar:**   Next for the search bar i used a useState hook to manage the search text. The useMemo hook will refilter the data if the company name or position name  
  	- ***Trade off***: If I had more time I would add additional filtering options beyond just company name and position title
- **Categories:** All jobs were filtered by category to create an array of strings. This array was mapped over with buttons for each category. Another state was used here to set the selected Category again,  reading from that same useMemoHook.
	- ***Trade off***: I would have considered using a more clear UI principle for the active category in addition to disabled it. Disabled buttons can sometimes send the wrong message to the user by resembling a permanent change or a role access issue
- **Sorting:**, I decided to try and keep it very close ended and only give users 2 options. Sort by Newest or Oldest. Again, the useMemo hook will refilter this data if the selected sorting type changes
 	- ***Trade off***: If I had more time I would add additional sorting options

