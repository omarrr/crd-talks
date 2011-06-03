require 'active_support/core_ext/string'

class Talkfile < Pathname
  def title
    basename( '.md' ).to_s.titleize
  end
  
end

desc "Seed DB with talks"
task :talks => :environment do
  
  Talk.destroy_all
  
  Dir[ Rails.root.join( 'talks', '*.md' ) ].map { |t| Talkfile.new( t ) }.each do |talk|
    
    puts talk.title
    
  end
  
end