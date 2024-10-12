const shop = require('./../models/shop')

module.exports = {
  'findAll' : async (req,res)=>{
    try{
      const result = await shop.find({})

      return res.status(200).json({state:true,data:result})
    }catch( err ){
      return res.status(500).json({state:"Error",data:null})
    }
  },
  'findById' : async(req,res)=>{
    const {id} = req.params 
    try{
      const result = await shop.findById(id).populate('instruments')
      if( result){
        return res.status(200).json({state:true,data:result})
      }

      return res.status(404).json({state:true,data:null})

      
    }catch( err ){
      return res.status(500).json({state:false,data:err})
    } 
  },
  'save' : async(req,res)=>{
    const tienda = new shop(req.body)
    try{
      const result = await tienda.save()

      return res.status(200).json({state:true,data:result})
    }catch(err){
      return res.status(500).json({state:false,data:err})
    }
  },
  'update':async(req,res)=>{
    const {idS} = req.params
    const {id,name,city} = req.body

    try{
      return res.status(200).json({state:"Success",data:{'idS':idS,nameS:name,cityS:city}})
    }catch(err){
      return res.status(501).json({state:false,data:err})
    }
  }

}