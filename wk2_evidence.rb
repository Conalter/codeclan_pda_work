
metal_bands = ["Led Zeppelin!", "Black Sabbath!", "AC/DC!", "Metallica!"]

metal_bands.each do |fan|
  shouting_fan = fan.upcase()
  p shouting_fan
end



iberian_peninsula  = {
  Spain:
        {population: 46000000 },
  Portugal:
        {population: 10000000 },
  Andorra:
        {population: 77000 },
  Gibraltar:
        {population: 34000 }
  }

p iberian_peninsula[:Andorra][:population]
