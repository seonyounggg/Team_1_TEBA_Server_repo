async function selectCoupon(connection, userIdx) {
    
    const selectCouponQuery = `select count(*) coupon from Coupon where isDeleted='N' and userIdx=?`;
  
    const couponRows = await connection.query(selectCouponQuery, [
        userIdx
    ]);
    return couponRows[0];
  }

  async function insertCoupon(connection, userIdx, storeIdx) {
    
    const selectCouponQuery = `INSERT INTO Coupon(userIdx, storeIdx) VALUES(?,?)`;
  
    const couponRows = await connection.query(selectCouponQuery, [userIdx, storeIdx]);
    return couponRows[0];
  }


  module.exports = {
    selectCoupon,
    insertCoupon
  }