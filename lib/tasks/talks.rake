

desc "Seed DB with talks"
task :talks do
  
  Talk.destroy_all
  
  Dir[ Rails.root.join( 'talks', '*.md' ) ].each do |talk|
    puts talk
    # puts 
  end
  
end