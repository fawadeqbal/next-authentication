import { connect } from '@/dbConfig/dbConfig'

import User from '@/models/userModel'

import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(req:NextRequest) {
    try{
        const reqBody = await req.json()

        const {username,password} = reqBody

        const user = await User.findOne({username})
        console.log(reqBody)

        if(!user){
            return NextResponse.json({error:"User does not exist."},{status:400})
        }

        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error:"Invalid password."},{status:400})
        }

        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }

        const token=jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: `1d` })

        const response = NextResponse.json({
            message:'Login successful',
            success:true
        })
        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response

    }catch(error : any){
        console.log(error)
        return NextResponse.json({ error:error.message})
    }
}