it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 10,
      rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual(104.16666666666667)
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
  });
  
  /// etc