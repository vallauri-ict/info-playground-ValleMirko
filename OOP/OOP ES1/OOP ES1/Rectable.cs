using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOP_ES1
{
    class Rectable
    {
        public int side1;
        public int side2;

        public Rectable() : this(1)
        {

        }
        public Rectable(int lato) : this( lato,lato)
        {

        }
        public Rectable(int lato1, int lato2)
        {
            side1 = lato1;
            side2 = lato2;
        }
    }
}
