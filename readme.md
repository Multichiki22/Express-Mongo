# Express and MongoDB with mongoose

This repo is part of a series of templates that are examples of how to create basic backends (REST)

## what is the purpose of this template

The main purpose of this templete is to help myself (or anyone who could be reading this) create new proyects faster and to remember the structure and/or syntax of a basic backend server in this case with: Express and MongoDB with mongoose.
<br>
Note that this base is not perfect but it is a good starting point for a small or medium project especially if you are not an expert on the subject

## How can i use it?

### Testing the template

As i said before this is just an template but you can use it to test things just by creating a .env file in the root where you can copy and paste the .env.example information into it and filling the information with your own configuration.

Then in the terminal you can use:

```
npm install
```

and then:

```
node server.js
```
and it should be working.

#### Testing the routes

I included some test of routes but it is necessary to use Thunder Client. Also in thunder-test folder is a collection of test if format JSON for importing in postman or insomnia 

### Modifing the template

If you want to use it as a base for any proyect i strongly suggest that you create a new project and copy the structure but not the files themselves because it tends to create hard to debug errors when renaming things.

if you still want to use this files as a base the only thing you have to do is rename everything that is called "example" with an apropiate name for your proyect

For example if your proyect is about football:

<table>
    <tr>
        <th>Before </th>
        <td>exampleCRUD</td>
        <td>getExample</td>
        <td>postExample</td>
    </tr>
    <tr>
        <th>After</th>
        <td>teamsCRUD</td>
        <td>getTeams</td>
        <td>postTeam</td>
    </tr>
</table>

That being said you have to be very carefull when reanming because a lot of times the imports wont update so you have to do it manually
Also be very careful with the names of the exports of mongoose

## To end this

If for some unknown reason you reach this repo and like the idea please leave a star i will be very gratefull

If for some even stranger reason you use it and something fails/is not working dont hesitate to say it