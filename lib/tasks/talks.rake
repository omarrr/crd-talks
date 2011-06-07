require 'active_support/core_ext/string'

class Talkfile < Pathname
  
  def slug
    basename( '.md' ).to_s.titleize
  end
  
  def title
    doc.xpath( '//h1' ).text
  end
  
  def goal
    doc.xpath( '//p' ).first.text
  end
  
  def html
    @html ||= RDiscount.new( read ).to_html
  end
  
  def <=>( other )
    ctime - other.ctime
  end
  
  protected
  
  def doc
    @doc ||= Nokogiri::HTML( html )
  end
end

desc "Seed DB with talks"
task :talks => :environment do
  
  Talk.destroy_all
  
  talkfiles.sort.each do |talk|
    
    Talk.create( 
      :title => talk.title, 
      :goal  => talk.goal,
      :html  => talk.html
    ).tap do |t|
      puts "#{t.title} created."
    end
    
  end
  
end

private

def talkfiles
  talks.map { |t| Talkfile.new( t ) }
end

def talks
  Dir[ Rails.root.join( 'talks', '*.md' ) ]
end